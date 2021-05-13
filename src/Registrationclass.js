
import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import bankService from './services/bank.service'
import SampleClass from './SampleClass';

class Registrationclass extends React.Component{
state={
    acno:'',
    username:'',
password:''

}
acnoChange=(event)=>{
    this.setState({
        acno:event.target.value
    })
}
    usernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })

    }
    passwordChange=(event)=>{
        this.setState({
            password:event.target.value
        })
     }
    
     handleSubmit=(event)=>{
         event.preventDefault();
         bankService.login({
            acno:this.state.acno,
            username:this.state.username,
            password:this.state.password
        }).then(data=>{
            this.props.history.push("/")
        })
        .catch(error=>{
            alert(error)
        })
         
     }
    render(){
        return<center> <div className="card" >
           
            
        <div className="card-header"> <h1>REGISTRATION</h1></div>
         <h2>username:{this.state.username}</h2>
         <SampleClass name="User1" a="User1"/>
         <div className="card-body">
         <form onSubmit={this.handleSubmit}>
         <div className="container">
         <div className="row">
    <div className="col">
    <p className="font-weight-normal">ACCOUNT NO   </p>
          </div>
    <div className="col"> <input onChange={this.acnoChange} name="acno" className="form-control" type="text"></input><br></br></div>
    </div>
    <div className="row">
    <div className="col">   USERNAME  </div>
    <div className="col"><input onChange={this.usernameChange} name="username" className="form-control" type="text"></input><br></br></div></div>
    
             
    
    <div className="row">
    <div className="col">  PASSWORD</div>
    <div className="col">   <input onChange={this.passwordChange} name="password" className="form-control" type="password"></input><br></br><br></br></div></div>
    <div className="row"> <div className="col-sm"></div> <div className="col"> 
     <input type="submit" onClick={this.handleSubmit} className="btn btn-success" value="Register"></input>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" className="btn btn-secondary"></input>
    </div> </div> 
     </div>  </form>
         </div>
         </div>
       
         </center>
    }
}
export default Registrationclass;