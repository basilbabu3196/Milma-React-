import React, {useState} from 'react';
import milmaService from './service/dataservice'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory} from  'react-router-dom'
import logo from'./Cow-Logo.jpg'
import Ome from './ome'
import {BrowserRouter,
Switch,
Route,
Link
} from 'react-router-dom'
function Registration() {
    
  //  const names=["name1","name2"];
    const [phone, setphone]= useState('');
const [username, setUsername]= useState('');
const [address, setaddress]= useState('');
const [password, setPassword]= useState('');

const history=useHistory();
const state={

    curTime : new Date().toLocaleString(),

  }



const phoneChange=(event)=>{
    setphone(event.target.value)

}
const addressChange=(event)=>{
    setaddress(event.target.value)

}
const passwordChange=(event)=>{
    setPassword(event.target.value)

}
const usernameChange=(event)=>{
    setUsername(event.target.value)

}

    const handleSubmit = (event) => {
        event.preventDefault();
        milmaService.register({
            phone:phone,
            username:username,
            address:address,
            password:password
        }).then(data=>{
            alert("SIGN UP SUCCESS")
            history.push("/")
        })
        .catch(error=>{
            alert(error.response.data.message)
        })
        event.preventDefault();
        milmaService.stock({
            phone:phone,
            time:state.curTime
        }).then(data1=>{
           console.log(data1);
            history.push("/")
        })
        .catch(error=>{
            alert(error.response.data1.message)
        })
    }
    return<div><Ome></Ome>
            
         
            
    <center>
   
    <div className="spa">
    
    
  <div class="carde">
      <h1 >SiGn UP</h1><br></br>
     <form onSubmit={handleSubmit}>
     <div class="container">
     <div class="row">
<div class="col">
<p class="font-weight-normal"> USERNAME  </p>
      </div>
<div class="col"> <input onChange={phoneChange} class="form-control" type="text" placeholder="Mobile/Email"></input><br></br></div>
</div>
<div class="row">
<div class="col">   SOCIETY OWNER_NAME  </div>
<div class="col"><input onChange={usernameChange} class="form-control" type="text" placeholder="Name"></input><br></br></div></div>
<div class="row">
<div class="col">   SOCIETY ADDRESS </div>
<div class="col"><textarea onChange={addressChange} class="form-control" type="text" placeholder="Address,Place"></textarea><br></br></div></div>
<div class="row">
<div class="col"> PASSWORD</div>
<div class="col">   <input onChange={passwordChange} class="form-control" type="password" min="6" placeholder="New Password-Least 6 character"></input><br></br><br></br></div></div>
<div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success" onClick={handleSubmit} type="submit">Sign Up</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
</div> </div> 
 </div>  </form>
     </div>
     </div>
   
     </center>
     </div>
}
export default Registration;