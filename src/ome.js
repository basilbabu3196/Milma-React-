
import React,{useState,useEffect} from 'react';
import logo from'./logo.png'
import purchase from './purchase'
import './demo.css'; 
import milmaService from './service/dataservice'
import 'bootstrap/dist/css/bootstrap.min.css'
import hdr from './ome'
import { useHistory } from  'react-router-dom'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

 // import Header from './header'
 
 



function home() {
  
 

 return <div>

  <div className="bd">
    <div className="head1">
        <div className="navigat"><img src={logo} width="80px" height="80px"></img><span className="text1">MIKSO</span></div>
        <div className="navigator"><Link to="/LoginFunction">LOGIN</Link></div>
        <div className="navigator"><Link to="/validate">VALIDATE</Link></div>
        <div className="navigator"><Link to="/Registration">SIGN UP</Link></div>
    </div>
</div>
    
  </div>
  

}
export default home;