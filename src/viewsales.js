import React, { Component } from 'react';
import axios from 'axios';
import { useHistory} from  'react-router-dom'
import milmaService from './service/dataservice'
import Home from './header'
import {Modal} from "./model2s";
export default class Sales extends Component {
   
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
 
        axios.get("http://localhost:8000/getsales",{  withCredentials: true}).then(response=>{
          console.log(response);
          this.setState({ usersCollection: response.data.data });
        
        }).catch(error=>{
            alert("please login")
            this.props.history.push("/")
        })
      }

      deletesales(id,quantity,amount)
      {
        const state={

            curTime : new Date().toLocaleString(),
          
          }
          if(window.confirm('Are you Sure Delete'))
          {
            axios.delete("http://localhost:8000/deletesales/"+id,{
                       withCredentials: true
               
            }).then(data=>{
                milmaService.resetstocksale({
                    quantity:quantity,
                    amount:amount,
                    time:state.curTime
                }).then(data1=>{
                   console.log(data1);
                   
                })       
          
            })
          }
      }
      editsales(id)
      {
       
          if(window.confirm('Are you Sure Delete'))
          {
            axios.delete("http://localhost:8000/deletesales/"+id,{
                       withCredentials: true
               
            }).then(data=>{
          alert("is it ok")     
          
            })
          }
      }
  
    render() {
        return (<div><Home></Home>
        <div className="spa">
            <div className="wrapper-users">
            <center><h3 className="p-3 mb-2 bg-light text-b">SALES DETAILS</h3></center>
                <div className="container">
                <Modal show={this.state.show} handleClose={this.hideModal}>
         
        </Modal>
                    <table className="table table-striped table-primary">

                        <thead className="thead-dark">
                            <tr>
                                <td>DATE/TIME</td>
                                <td>QUANTITY</td>
                                <td>AMOUNT</td>
                                <td>ACTION</td>
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
                    {data.amount}
                </td>
                <td>
                <button className="btn btn-primary" type="button" onClick={()=>this.showModal(data._id,data.quantity,data.amount)}>
          Edit 
        </button>&nbsp;&nbsp;
               <button className="btn btn-danger" onClick={()=>this.deletesales(data._id,data.quantity,data.amount)} varient="Danger">
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