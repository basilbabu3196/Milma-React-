//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginFunctions from './LoginFunction'
import Registration from './Registration'
 import home from './header'
 import purchase from './purchase'
 import sales from './sales'
 import viewstock from './viewstock'
 import viewpurchase from './viewpurchase'
 import viewsales from './viewsales'
 import viewuser from './viewuser'
 import header from './homee'
 import Demo from './demo'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
 
    <div className="App">
    
     <BrowserRouter>
   

   
    <Switch>
     <Route path="/home" component={home}>

</Route> 
      <Route path="/Registration" component={Registration}>

</Route>
<Route path="/demo" component={Demo}>

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
      <Route path="/" component={LoginFunctions}>

</Route>

      <Route path="/header"  component={header}>

</Route>
</Switch>

    
</BrowserRouter>
      
    </div>

  );
}

export default App;
