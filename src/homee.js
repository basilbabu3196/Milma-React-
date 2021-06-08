//import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import milmaService from './service/dataservice'
 import home from './header'
 
 import { useHistory } from  'react-router-dom'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function heade() {



 return<div>
    <home></home>
    <p>okda</p>
     </div>
   
}
export default heade;