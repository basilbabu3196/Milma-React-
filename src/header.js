
import './demo2.css';
import React,{useState,useEffect} from 'react';
import purchase from './purchase'
import milmaService from './service/dataservice'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo.png';
import { useHistory } from  'react-router-dom'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

 // import Header from './header'
 
 
let data=localStorage.getItem('user');


function home() {
  
 
//let data=localStorage.getItem('user');



  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history=useHistory();
  const handleSubmit = (event) => {
  
    event.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('ph');
    history.push("/LoginFunction")
  }



 return <div>
    <form onSubmit={handleSubmit}>
 <div className="bdy">
    <div className="head">
        <div className="navigat"><img src={Logo} width="70px" height="70px"></img><span class="text1">MIKSO</span></div>
        <div className="navigator"><Link to="/demo" className="nav1">Home</Link></div>
        <div className="navigator"><Link to="/purchase" className="nav1">Purchase</Link></div>
        <div className="navigator"> <Link to="/viewpurchase" className="nav1">View Purchase</Link></div>
        <div className="navigator"><Link to="/sales" className="nav1">Sales</Link></div>
        <div className="navigator"> <Link to="/viewsales" className="nav1">Viewsales</Link></div>
        <div className="navigator"><Link to="/viewstock" className="nav1">Stock</Link></div>
        <div className="navigator"><Link to="/viewuser" className="nav1">Profile</Link></div>
        <button className="but">LOG OUT</button>
    </div>
</div>

<h1 className="wel">WELCOME {data}</h1>
</form>
 
    
  </div>
  

}
export default home;