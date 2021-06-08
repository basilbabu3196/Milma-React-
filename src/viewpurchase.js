import React, { Component } from 'react';
import axios from 'axios';
import {Modal} from "./model1";
// import DataTable from './DataTable';
import milmaService from './service/dataservice'
import Home from './header'
export default class Purchase extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] ,
            show: false
        
        };
        this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this); 
    }
   
    
    showModal = (id,quantity,amount) => {
        localStorage.setItem('id', id);
        localStorage.setItem('qn', quantity);
        localStorage.setItem('am', amount);
        this.setState({ show: true });
      };
    
      hideModal = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('qn');
        localStorage.removeItem('am');
        this.setState({ show: false });
      };
    componentDidMount(){
 
        axios.get("http://localhost:8000/getpurchase",{withCredentials: true}).then(response=>{
          console.log(response);
          this.setState({ usersCollection: response.data.data });
        
        }).catch(error=>{
            window.confirm("please login")
            this.props.history.push("/")
        })
      }
     
      deletepurchase(id,quantity,amount)
      {
        const state={

            curTime : new Date().toLocaleString(),
          
          }
          if(window.confirm('Are you Sure Delete'))
          {
            axios.delete("http://localhost:8000/deletepurchase/"+id,{
                       withCredentials: true
               
            }).then(data=>{
                milmaService.resetstockpur({
                    quantity:quantity,
                    amount:amount,
                    time:state.curTime
                }).then(data1=>{
                   console.log(data1);
                   
                })    
          
            })
            
          }
      }

    // dataTable() {
    //     return this.state.usersCollection.map((data, i) => {
           
    //     });
    // }

    render() {
        return (<div><Home></Home>
        <div className="spa">
            <div className="wrapper-users">
            <center><h3 className="p-3 mb-2 bg-light text-success">PURCHASE DETAILS</h3></center>
                <div className="container">
                <Modal show={this.state.show} handleClose={this.hideModal}>
         
         </Modal>
                    <table className="table table-striped table-primary">
                        <thead className="thead-dark">
                            <tr>
                                <td>DATE/TIME</td>
                                <td>QUANTITY</td>
                                <td>TEST</td>
                                <td>READING</td>
                                <td>AMOUNT</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                         {this.state.usersCollection.map((data, i) => {
           return(
            <tr>
                <td>
                    {data.time}
                </td>
                <td>
                    {data.quantity}
                </td>
                <td>
                    {data.test}
                </td>
                <td>
                    {data.reading}
                </td>
                <td>
                    {data.amount}
                </td>
                <td>
                <button className="btn btn-primary" type="button" onClick={()=>this.showModal(data._id,data.quantity,data.amount)}>
          Edit 
        </button>&nbsp;&nbsp;
               <button className="btn btn-danger" onClick={()=>this.deletepurchase(data._id,data.quantity,data.amount)} varient="Danger">
                   Delete
               </button>
                </td>
                
            </tr>
           )
        })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            </div>
        )
    }
}