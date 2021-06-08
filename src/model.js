import React, {useState} from 'react';
import './model.css';
import axios from 'axios';
import milmaService from './service/dataservice'
import { useHistory} from  'react-router-dom'
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [username, setusername]= useState('');
  const [address, setaddress]= useState('');
  const [cpassword, setcpassword]= useState('');
  const [password, setpassword]= useState('');


  const usernameChange=(event)=>{
    setusername(event.target.value)

}
const addressChange=(event)=>{
  setaddress(event.target.value)

}

const passwordChange=(event)=>{
  setpassword(event.target.value)

}
const cpasswordChange=(event)=>{
  setcpassword(event.target.value)

}
 const handleSubmit = (event) => {
      event.preventDefault();
      const id = localStorage.getItem('id');
      if(id==cpassword)
      {
        milmaService.editprofile({
          username:username,
          address:address,
          password:password
      }).then(data=>{
          alert("Edited Successfully")
      })
        

      }
      else
      {
        alert("wrong password")
      }
      
 
 
}

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="edithead"><button type="button" id="close" className="btn btn-danger" onClick={handleClose}>
          X
        </button><h3>EDIT </h3></div>
        <form onSubmit={handleSubmit}>
            <div className="container"> <br></br>
              <div className="row">
                <div className="col">User name</div>
                <div className="col"><input type="text" className="form-control" name="username" onChange={usernameChange}></input></div>
                </div><br></br>
                <div className="row">
                <div className="col">Address</div>
                <div className="col"><input type="text" className="form-control" name="address" onChange={addressChange}></input></div>
                </div><br></br>
                <div className="row">
                <div className="col">Current Password</div>
                <div className="col"><input type="password" className="form-control" name="cpassword" onChange={cpasswordChange}></input></div>
              </div><br></br>
                <div className="row">
                <div className="col">New Password</div>
                <div className="col"><input type="password" className="form-control" name="password" onChange={passwordChange}></input></div>
              </div><br></br>
              <div className="row">
                <div className="col"></div>
                <div className="col"><button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button></div>
              </div>
            </div><br></br>
        </form>
      </section>
    </div>
  );
};
export {Modal};