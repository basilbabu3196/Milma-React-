/* eslint-disable no-undef */
import React,{Component,useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import Home from './header'
class Stock extends Component{

  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };
}

componentDidMount(){
 
  axios.get("http://localhost:8000/getstock",{  withCredentials: true}).then(response=>{
    console.log(response);
    this.setState({ usersCollection: response.data.stock });
  
  }).catch(error=>{
    alert("please login")
    this.history.push("")
})
}
dataTable() {
  // return this.state.usersCollection?.map((data, i) => {
  //     return <DataTable obj={data} key={i} />;
  // });
  console.log(this.state.usersCollection);
}
render(){
const userdetails=this.state.usersCollection
  return (<div><Home></Home>
  <div className="spa">
    <div className="wrapper-users">
      <center><h3 className="p-3 mb-2 bg-light text-success">STOCK DETAILS</h3></center>
        <div className="container">
            <table className="table table-striped table-light">
                <thead className="thead-light">
                   
                </thead>
                <tbody>
                    <tr>
                        
                       
                        <td>Avilable Milk(L)</td> <td>{userdetails.quantity}</td></tr>
                        <tr><td>Avilable Amount(RS)</td><td>{userdetails.amount}</td>
                    </tr>
                    <tr><td>Last Update</td><td>{userdetails.time}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
    </div>
)
}
}



export default Stock;