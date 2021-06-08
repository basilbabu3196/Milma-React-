import React, {useState} from 'react';
import './model.css';
import axios from 'axios';
import milmaService from './service/dataservice'
import { useHistory } from  'react-router-dom'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [quantity, setquantity]= useState('');
  const [amount, setamount]= useState('');
  const [reading, setreading]= useState('');
  const [test, settest]= useState('');
  const history=useHistory();
  const quantityChange=(event)=>{
    setquantity(event.target.value)

}
const readingChange=(event)=>{
    setreading(event.target.value)

}
const testChange=(event)=>{
    settest(event.target.value)

}
const state={

  curTime : new Date().toLocaleString(),

}
const amountChange=(event)=>{
  setamount(event.target.value)

}
 const handleSubmit = (event) => {
      event.preventDefault();
      const id= localStorage.getItem('id');
      const quantit= localStorage.getItem('qn');
      const amoun= localStorage.getItem('am');
      console.log(id);
      milmaService.resetstockpur({
        quantity:quantit,
        amount:amoun,
        time:state.curTime
    }).then(data1=>{
       console.log(data1);
       
    }) 
    event.preventDefault();
      milmaService.editpurchase({
        id:id,
        quantity:quantity,
        reading:reading,
        test:test,
        amount:amount,
        time:state.curTime
    }).then(data=>{
        alert("SUCCESS")
        
    }).catch(error=>{
      alert(error.message)
  })
      
        localStorage.removeItem('id');
        localStorage.removeItem('qn');
        localStorage.removeItem('am');
        history.push("/demo")
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
                <div className="col">Quantity</div>
                <div className="col"><input type="number" className="form-control" name="quantity" onChange={quantityChange}></input></div>
                </div><br></br>
                <div className="row">
                <div className="col">Reading</div>
                <div className="col"><input type="number" className="form-control" name="reading" onChange={readingChange}></input></div>
                </div><br></br>
                <div className="row">
                <div className="col">Test</div>
                <div className="col"><input type="number" className="form-control" name="test" onChange={testChange}></input></div>
                </div><br></br>
                <div className="row">
                <div className="col">Amount</div>
                <div className="col"><input type="number" className="form-control" name="amount" onChange={amountChange}></input></div>
              </div><br></br>
              <div className="row">
                <div className="col"></div>
                <div className="col"><button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update Purchase</button></div>
              </div>
            </div><br></br>
        </form>
      </section>
    </div>
  );
};
export {Modal};