/* eslint-disable no-undef */
import React,{Component,useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import Home from './header'
import {Modal} from "./model";
class User extends Component{

  constructor(props) {
    super(props);
    this.state = { usersCollection: [],
                   show: false 
    
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this); 
}
showModal = (password) => {
  localStorage.setItem('id', password);
  this.setState({ show: true });
};

hideModal = () => {
  localStorage.removeItem('id');
  this.setState({ show: false });
};

componentDidMount(){
 
  axios.get("http://localhost:8000/getuser",{  withCredentials: true}).then(response=>{
    console.log(response);
    this.setState({ usersCollection: response.data.user });
  
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
  return ( <div><Home></Home>

  <div className="spa">
    <div className="wrapper-users">
   
      <center><h3 className="p-3 mb-2 bg-light text-primary">PROFILE DETAILS</h3></center>
        <div className="container">
        <Modal show={this.state.show} handleClose={this.hideModal}>
         
         </Modal>
            <table className="table table-striped table-light">
                <thead className="thead-light">
                 
                </thead>
                <tbody>
                    <tr>
                        
                        <td>SOCIETY OWNER NAME</td><td>{userdetails.username}</td></tr>
                      <tr>
                        <td>USERNAME</td> <td>{userdetails.phone}</td></tr>
                        <tr>
                        <td>SOCIETY ADDRESS</td><td>{userdetails.address}</td>
                    </tr>
                    <tr>
                      <td></td><td><button className="btn btn-primary" type="button" onClick={()=>this.showModal(userdetails.password)}>
          Edit Profile
        </button></td>
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



export default User;