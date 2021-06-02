import React, { useState } from "react";
import axios from "axios";
import Input from "../input/input";
// user_name`,`user_email`,`user_password`,`user_pincode`,`user_address`
const Auth = () => {

  const registerUser = (e) => {
    e.preventDefault();
      
  }
  
  return (
    <div className="authBody">
      <article>
        <h1 className="shopregh">User Registration</h1>
        <form className="authform" onSubmit={registerUser}>
          <div>
            <div className="authflex">
                <Input hfor="user_name" type="text" label="Name" />
              <Input
                hfor="user_email"
                type="email"
                label="Email Address"
              />
            </div>
            <div className="authflex">
              <Input
                hfor="user_password"
                type="password"
                label="Password"
              />
              <Input
                hfor="user_pincode"
                type="number"
                label="Pincode"
              />
            </div>
            <div className="authflex">
              <Input
                hfor="user_address"
                type="text"
                label="Address"
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
