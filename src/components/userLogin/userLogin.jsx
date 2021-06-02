import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios'
import Input from "../input/input";
// import CustHome from '../custhome/custhome'

const Login = () => {

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
      <React.Fragment>
        <div className="authBody">
          <article>
            <h1 className="shopregh">User Login</h1>
            <form className="authform" onSubmit={submitHandler}>
              <div>
                <div className="authflex">
                  <Input
                    hfor="user_email"
                    type="tel"
                    label="Email Address"
                  />
                </div>
                <div className="authflex">
                  <Input
                    hfor="user_password"
                    type="password"
                    label="Password"
                  />
                </div>

                <div className="authflex">
                  <button className="yelbtn" type="submit">
                    Login
                  </button>
                  <button type="button" className="redbtn" onClick={() => { window.location.href = '/user/register' }}>
                    Registration
                  </button>
                </div>
              </div>
            </form>
          </article>
        </div>
      </React.Fragment>
    );
};

export default Login;
