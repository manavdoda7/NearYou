import React,{useState,useContext,useEffect} from 'react'
import Home from './components/home/home'
import Auth from './components/registration/auth'
import Login from './components/login/login'
import CustHome from './components/custpages/custpages'
import ShopListing from './components/shopListing/shopListing'
import ShopAddItems from './components/addProduct/addProduct'
import UserRegister from './components/userRegister/userRegister'
import UserLogin from './components/userLogin/userLogin'
import ShopDashboard from './components/shopdashboard/shopDashboard'

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

import shopListing from './components/shopListing/shopListing'



const App = () => {
   return (
      <Router>
         <Route exact path='/'> 
            <Home/>
         </Route>
         <Route exact path='/shop/register'>
         <Auth/>
         </Route>
         <Route exact path='/shop/dashboard'>
               <Login />
         </Route>
         <Route exact path='/user/register'>
               <UserRegister/>
         </Route>
         <Route exact path='/user/login'>
               <UserLogin/>
         </Route>    
         <Route exact path = '/user/home'>
            <CustHome/>   
         </Route>     
         <Route exact path='/shop/db'>
            <ShopDashboard/>
         </Route>
      </Router>
   )
}


export default App;
