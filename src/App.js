import React from 'react'
import Home from './components/home/home'
import Auth from './components/registration/auth'
import Login from './components/login/login'
import CustHome from './components/custpages/custpages'
import ShopDashboard from './components/shopdashboard/shopDashboard'

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

const App = () => {
   return (
      <Router>
         <Route exact path='/'> 
            <CustHome/>
         </Route>
         <Route exact path='/shop/register'>
         <Auth/>
         </Route>
         <Route exact path='/shop/login'>
               <Login />
         </Route>
         <Route exact path='/shop/dashboard'>
               <ShopDashboard/>
         </Route>

      </Router>
   )
}


export default App;
