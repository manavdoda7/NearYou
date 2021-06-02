import React, { useContext, useState } from "react";
import axios from 'axios'
import Input from "../input/input";
import CustHome from '../custhome/custhome'

const Login = () => {
  const [shopAuthToken,setShopAuthToken] = useState("cool");
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const [vals, setVals] = useState({
    shop_phone_number: "",
    shop_password: ""
  })

  const setValue = (name, value) => {
    setVals({
      ...vals,
      [name]: value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const url = 'http://localhost:5000/api/shops/login';
    axios.post(url, {
      shop_phone_number: vals.shop_phone_number,
      shop_password: vals.shop_password
    })
      .then(response => {
        setVals({
          shop_phone_number: "",
          shop_password: ""
        })
        if (response.data) {
          let a =response.data.token;
          // a = a.toString();
          console.log(a);
          // setShopAuthToken(a.toString());
          setShopAuthToken("dflsfdslfhd");
          // localStorage.setItem('loginStatus',true);
          console.log(shopAuthToken);
          loginShop();

        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const loginShop = ()=>{
      const url = 'http://localhost:5000/api/shops/dashboard';
      console.log(shopAuthToken);
      axios.get(url,{
        headers:{
          'Authorization': shopAuthToken
        }
      })
        .then(response=>{
          if(response.data){
            console.log(response.data);
            setIsLoggedIn(true);
          }
        })
        .catch(err=>{
          console.log(err)
        })
  }

  if (!isLoggedIn) {
    return (
      <React.Fragment>
        <div className="authBody">
          <article>
            <h1 className="shopregh">Shop Login</h1>
            <form className="authform" onSubmit={submitHandler}>
              <div>
                <div className="authflex">
                  <Input
                    hfor="shop_phone_number"
                    type="tel"
                    label="Phone Number"
                    value={vals.shop_phone_number}
                    setValue={setValue}
                  />
                </div>
                <div className="authflex">
                  <Input
                    hfor="shop_password"
                    type="password"
                    label="Password"
                    value={vals.shop_password}
                    setValue={setValue}
                  />
                </div>

                <div className="authflex">
                  <button className="yelbtn" type="submit">
                    Login
                  </button>
                  <button type="button" className="redbtn" onClick={() => { window.location.href = '/shop/register' }}>
                    Registration
                  </button>
                </div>
              </div>
            </form>
          </article>
        </div>
      </React.Fragment>
    );
  }else{
    return <CustHome/>
  }

};

export default Login;
