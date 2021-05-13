

import React,{useState,useEffect} from 'react';
import purchase from './purchase'
import milmaService from './service/dataservice'
import 'bootstrap/dist/css/bootstrap.min.css'
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
     <nav className="nav1">
 <form onSubmit={handleSubmit}>
 <ul className="ul1">
 <li className="li1"><button type="submit" onClick={handleSubmit} className="btn btn-outline-danger">LOGOUT </button>&nbsp;</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <li className="li1"><Link to="/viewuser" className="nav1">Profile</Link>&nbsp;</li>&nbsp;&nbsp;&nbsp;
 <li className="li1"><Link to="/viewstock" className="nav1">Stock</Link>&nbsp;</li>&nbsp;&nbsp;&nbsp;
 
                            <li className="li1"><Link to="/purchase" className="nav1">Purchase</Link>&nbsp;</li>
                            <li className="li1"><Link to="/viewpurchase" className="nav1">View Purchase</Link>&nbsp;</li>
                         
                   
 
  <li className="li1"><Link to="/viewsales" className="nav1">Viewsales</Link>&nbsp;</li>&nbsp;&nbsp;&nbsp;
  <li className="li1"><Link to="/sales" className="nav1">Sales</Link>&nbsp;</li>&nbsp;&nbsp;&nbsp;
  <li className="li1"><Link to="/HOME" className="nav1">Home</Link></li>&nbsp;&nbsp;&nbsp;
  {/* <li><Link to="/home"> home</Link>&nbsp;</li> */}
  
</ul>
<h1>WELCOME {data}</h1>
</form>
  </nav>
    
  </div>
  

}
export default home;