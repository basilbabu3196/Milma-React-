//import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import milmaService from './service/dataservice'
 import home from './header'
 import purchase from './purchase'
 import sales from './sales'
 import viewstock from './viewstock'
 import viewpurchase from './viewpurchase'
 import viewsales from './viewsales'
 import viewuser from './viewuser'
 import { useHistory } from  'react-router-dom'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function heade() {

let data=localStorage.getItem('user');



  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history=useHistory();
  const handleSubmit = (event) => {
  
    event.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('ph');
    history.push("/LoginFunction")
  }



 return<div><BrowserRouter>
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
     <Switch>
     <Route path="/home" component={home}>

</Route> 
<Route path="/viewuser" component={viewuser}>

</Route>


<Route path="/sales" component={sales}>

</Route>
<Route path="/purchase" component={purchase}>

</Route>
<Route path="/viewpurchase" component={viewpurchase}>

</Route>
<Route path="/viewsales" component={viewsales}>

</Route>
<Route path="/viewstock" component={viewstock}>

</Route>



     </Switch>
     
     
     
     
     </BrowserRouter>
     </div>
   
}
export default heade;