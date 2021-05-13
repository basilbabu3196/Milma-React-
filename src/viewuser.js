/* eslint-disable no-undef */
import React,{Component,useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import Home from './header'
class User extends Component{

  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };
}

componentDidMount(){
 
  axios.get("http://localhost:8000/getuser",{  withCredentials: true}).then(response=>{
    console.log(response);
    this.setState({ usersCollection: response.data.user });
  
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
    <div className="wrapper-users">
   
      <center><h3 className="p-3 mb-2 bg-light text-primary">PROFILE DETAILS</h3></center>
        <div className="container">
            <table className="table table-striped table-light">
                <thead className="thead-light">
                 
                </thead>
                <tbody>
                    <tr>
                        
                        <td>SOCIETY OWNER NAME</td><td>{userdetails.username}</td></tr><tr>
                        <td>USERNAME</td> <td>{userdetails.phone}</td></tr><tr>
                        <td>SOCIETY ADDRESS</td><td>{userdetails.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
)
}
}



export default User;