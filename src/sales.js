/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import milmaService from './service/dataservice'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory} from  'react-router-dom'
import Home from './header'
function purchase() {
    
    //  const names=["name1","name2"];
    const [qnt, setqnt]= useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [amount, setamount]= useState('');
    const history=useHistory();
   
    const state={

        curTime : new Date().toLocaleString(),
    
      }
  const qntChange=(event)=>{
    setqnt(event.target.value)
  
  }
 
  const amountChange=(event)=>{
      setamount(event.target.value)
  
  }
  
      const handleSubmit = (event) => {
          event.preventDefault();
          milmaService.sales({
              quantity:qnt,
              amount:amount,
              time:state.curTime
          }).then(data=>{
              alert("SALES SUCCESS")
          })
          .catch(error=>{
              alert(error.response.data.message)
          })
      }
      return <center> <Home></Home><div className="card" >
             
              
      <div className="card-header"> <h1> SALES</h1></div>
       
      
       <div class="card-body">
       <form onSubmit={handleSubmit}>
       <div class="container">
       <div class="row">
  <div class="col">
  <p class="font-weight-normal">  MILK QUANTITY   </p>
        </div>
  <div class="col"> <input onChange={qntChange} class="form-control" type="text"></input><br></br></div>
  </div>
  <div class="row">
  <div class="col">  TOTAL AMOUNT </div>
  <div class="col"><input onChange={amountChange} class="form-control" value={qnt*50} type="text"></input><br></br></div></div>
  
  <div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success" onClick={handleSubmit} type="submit">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
  </div> </div> 
   </div>  </form>
       </div>
       </div>
     
       </center>
  }
  export default purchase;