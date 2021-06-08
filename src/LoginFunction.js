import Ome from './ome'
import React, {useState} from 'react';
import logo from'./Cow-Logo.jpg'
import milmaService from './service/dataservice'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory} from  'react-router-dom'

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

function LoginFunctions() {
    
   
    const [phone, setphone]= useState('');
    const [password, setPassword]= useState('');
    const history=useHistory();
    const passwordChange=(event)=>{
        setPassword(event.target.value)

}

    const phoneChange=(event)=>{
        setphone(event.target.value)

    }


        const handleSubmit = (event) => {
            event.preventDefault();
            milmaService.login({
                phone:phone,
                password:password
            }).then(data=>{
                const d=data.data.name;
                const p=data.data.phone;
            console.log(d,p);
            localStorage.setItem('user', d);
            localStorage.setItem('ph', p);
                history.push("/home")
            })
            .catch(error=>{
                alert(error)
            })
            
        }
        return <div><Ome></Ome>
            
         
            
            <center>
           
            <div className="spa">
            
       
        <div class="carde"> 
        <h1>LOGIN</h1><br></br>
        <form method="post" onSubmit={handleSubmit}>
        <div class="container">
        <div class="row">
    <div class="col">
        USERNAME</div>
            <div class="col">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span> <input required="required" onChange={phoneChange} type="text" class="form-control" placeholder="PHONE/EMAIL_ID" ></input><br></br><br></br>
                </div></div>
                <div class="row">
    <div class="col">
            PASSWORD</div>
            <div class="col"><input onChange={passwordChange} required type="password" class="form-control" min="6" placeholder="Password"></input>
            </div></div><br></br>
            <div class="row">
    <div class="col"></div> <div class="col"> <button class="btn btn-primary" onClick={handleSubmit} type="submit">LOGIN</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="reset" value="Cancel" class="btn btn-secondary"></input></div></div>
    </div>
        </form>
        </div>
        
        </div>
        </center>
        </div>
}
export default LoginFunctions;
