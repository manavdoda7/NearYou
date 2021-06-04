import React, { useState, useContext, useEffect } from 'react'
import Home from './components/home/home'
import Auth from './components/registration/auth'
import Login from './components/login/login'
import CustHome from './components/custpages/custpages'
// import ShopListing from './components/shopListing/shopListing'
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


export const mainContext = React.createContext(null);

const App = () => {
   let user = JSON.parse(window.localStorage.getItem('user'));
   const [userCred, setUserCred] = useState({
      user_id: (user) ? user.user_id : '',
      user_name: (user) ? user.user_name : '',
      user_email: (user) ? user.user_email : '',
      user_pincode: (user) ? user.user_pincode : '',
      user_address: (user) ? user.user_address : ''
   });

   let shop = JSON.parse(localStorage.getItem('shop'));
   const [shopInfo, setShopInfo] = useState({
      shop_id: (shop) ? shop.shop_id : '',
      shop_name: (shop) ? shop.shop_name : '',
      shop_owner_name: (shop) ? shop.shop_owner_name : '',
      shop_address: (shop) ? shop.shop_address : '',
      shop_type: (shop) ? shop.shop_type : '',
      shop_phone_number: (shop) ? shop.shop_phone_number : '',
      shop_pincode: (shop) ? shop.shop_pincode : ''
   })

   return <Router basename="https://manavdoda7.github.io/NearYou/">
      <mainContext.Provider value={{ userCred, shopInfo, setShopInfo, setUserCred }}>

         <Route exact path='/'>
            <Home />
         </Route>
         <Route exact path='/shop/register'>
            <Auth />
         </Route>
         <Route exact path='/shop/login'>
            <Login />
         </Route>
         <Route exact path='/user/register'>
            <UserRegister />
         </Route>
         <Route exact path='/user/login'>
            <UserLogin />
         </Route>
         <Route exact path='/user/home'>
            <CustHome />
         </Route>
         <Route exact path='/shop/dashboard'>
            <ShopDashboard />
         </Route>

      </mainContext.Provider>;
      </Router>
}


export default App;
