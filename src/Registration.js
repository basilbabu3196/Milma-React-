import React, {useState} from 'react';
import milmaService from './service/dataservice'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory} from  'react-router-dom'
import logo from'./Cow-Logo.jpg'
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
    return<center> <div className="card" >
            <ul>
  <li><Link to="/LoginFunction">LOGIN</Link>&nbsp;</li>&nbsp;&nbsp;&nbsp;
  <li><Link to="/Registration">SIGN UP</Link>&nbsp;</li>
  {/* <li><Link to="/home"> home</Link>&nbsp;</li> */}
  
</ul>
  
    <div className="card-header1"> 
    <h1 ><img src={logo} height="10%" width="10%"></img>MIK-SO</h1> 
    
    <h1 className="text-primary">SIGN UP</h1></div>
     
    
     <div class="card-body">
     <form onSubmit={handleSubmit}>
     <div class="container">
     <div class="row">
<div class="col">
<p class="font-weight-normal"> MOBILE NUMBER/EMAIL ID  </p>
      </div>
<div class="col"> <input onChange={phoneChange} class="form-control" type="text"></input><br></br></div>
</div>
<div class="row">
<div class="col">   SOCIETY OWNER_NAME  </div>
<div class="col"><input onChange={usernameChange} class="form-control" type="text"></input><br></br></div></div>
<div class="row">
<div class="col">   SOCIETY ADDRESS </div>
<div class="col"><textarea onChange={addressChange} class="form-control" type="text"></textarea><br></br></div></div>
<div class="row">
<div class="col"> NEW PASSWORD</div>
<div class="col">   <input onChange={passwordChange} class="form-control" type="password"></input><br></br><br></br></div></div>
<div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success" onClick={handleSubmit} type="submit">Register</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
</div> </div> 
 </div>  </form>
     </div>
     </div>
   
     </center>
}
export default Registration;