/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import milmaService from './service/dataservice'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './header'
import { useHistory} from  'react-router-dom'
function purchase() {
    
    //  const names=["name1","name2"];
    const [qnt, setqnt]= useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [amount, setamount]= useState('');
    const [reading, setreading]= useState('');
    const [test, settest]= useState('');
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
  const readingChange=(event)=>{
    setreading(event.target.value)

}
const testChange=(event)=>{
    settest(event.target.value)

}
  
      const handleSubmit = (event) => {
          event.preventDefault();
          milmaService.purchase({
              quantity:qnt,
              reading:reading,
              test:test,
              amount:amount,
              time:state.curTime,
          }).then(data=>{
              alert("PURCHASE SUCCESS")
          })
          .catch(error=>{
              alert(error.response.data.message)
          })
      }
      return<div><Home></Home><center> <div className="card" >
             
              
      <div className="card-header"> <h1> PURCHASE</h1></div>
       
      
       <div class="card-body">
       <form onSubmit={handleSubmit}>
       <div class="container">
       <div class="row">
  <div class="col">
  <p class="font-weight-normal"> MILK QUANTITY  </p>
        </div>
  <div class="col"> <input onChange={qntChange} class="form-control" type="text"></input><br></br></div>
  </div>
  <div class="row">
  <div class="col">
  <p class="font-weight-normal">  READING  </p>
        </div>
  <div class="col"> <input onChange={readingChange} class="form-control" type="text"></input><br></br></div>
  </div>
  <div class="row">
  <div class="col">
  <p class="font-weight-normal"> TEST  </p>
        </div>
  <div class="col"> <input onChange={testChange} class="form-control" type="text"></input><br></br></div>
  </div>
  <div class="row">
  <div class="col">  TOTAL AMOUNT </div>
  <div class="col"><input onChange={amountChange} class="form-control" value={qnt*50} type="text"></input><br></br></div></div>
  
  <div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success" onClick={handleSubmit} type="submit">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
  </div> </div> 
   </div>  </form>
       </div>
       </div>
       {/*(fetch display) https://www.positronx.io/react-axios-tutorial-make-http-get-post-requests/ */}
       </center>
       </div>
  }
  export default purchase;