import React, { useState } from "react";
import axios from "axios";
import Input from "../input/input";
import {url} from '../../backend'
// user_name`,`user_email`,`user_password`,`user_pincode`,`user_address`
const Auth = () => {

  const [wait,setWait] = useState(false);
  const [inputVals, setInputVals] = useState({
    user_name:"",
    user_email:"",
    user_address:"",
    user_pincode:"",
    user_password:"",
  })

  const valueHandler = (name,val)=>{
    setInputVals({
      ...inputVals,
      [name]: val
    })
  }

  const registerUser = (e)=>{
    setWait(true);
      e.preventDefault();
      const data = {
        user_name: inputVals.user_name,
        user_email: inputVals.user_email,
        user_password: inputVals.user_password,
        user_pincode: inputVals.user_pincode,
        user_address:inputVals.user_address
      }
      console.table(data);
      setInputVals({
        user_name:"",
        user_email:"",
        user_address:"",
        user_pincode:"",
        user_password:"",
      })
      axios.post((url+'/user/register').toString(),data)
        .then(response=>{
            console.log(response);
            setWait(false);
            window.location.href = '/user/login'
          })
          .catch(err=>{
            console.log('here1')
            if(err.response){
              if(err.response.status === 409){
                setWait(false);
                alert('User already registered');
                window.location.href = '/user/register'
              }else{
                alert('Please retry at some other time')
                window.location.reload();
              }
            }else{
              alert('Please retry at some other time')
              window.location.reload();
            }
        })
  }
  
  return (
    <div className="authBody">
      <article>
        <h1 className="shopregh">User Registration</h1>
        <form className="authform" onSubmit={registerUser}>
          <div>
            <div className="authflex">
                <Input hfor="user_name" type="text" label="Name" value={inputVals.user_name}
                setValue={valueHandler} />
              <Input
                hfor="user_email"
                type="email"
                label="Email Address"
                value={inputVals.user_email}
                setValue={valueHandler}
              />
            </div>
            <div className="authflex">
              <Input
                hfor="user_password"
                type="password"
                label="Password"
                value={inputVals.user_password}
                setValue={valueHandler}
              />
              <Input
                hfor="user_pincode"
                type="number"
                label="Pincode"
                value={inputVals.user_pincode}
                setValue={valueHandler}
              />
            </div>
            <div className="authflex">
              <Input
                hfor="user_address"
                type="text"
                label="Address"
                value={inputVals.user_address}
                setValue={valueHandler}
              />
            </div>
            <div className="authflex">
              <button className="yelbtn" type="submit">
                Register
              </button>
              <button
                onClick={() => {
                  window.location.href = "/user/login";
                }}
                type="button"
                className="redbtn"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </article>
    </div>
  );
};

export default Auth;
