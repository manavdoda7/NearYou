import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import Input from "../input/input";
// import CustHome from '../custhome/custhome'
import CustHome from "../custpages/custpages";
import { url } from "../../backend";

import { mainContext } from "../../App";

const reducer = (state, action) => {
  if (action.type === "SET_TOKEN") {
    return {
      ...state,
      userAuthToken: action.payload,
    };
  }
  return state;
};

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { userCred, setUserCred } = useContext(mainContext);

  const [vals, setVals] = useState({
    user_email: "",
    user_password: "",
  });

  const setValue = (name, val) => {
    setVals({
      ...vals,
      [name]: val,
    });
  };

  const [state, dispatch] = useReducer(reducer, {
    userAuthToken: "none",
  });

  useEffect(() => {
    if (state.userAuthToken !== "none" && state.userAuthToken !== undefined) {
      // console.log(state.userAuthToken);
      axios
        .get(url + "/user/dashboard", {
          headers: {
            Authorization: state.userAuthToken,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data) {
            window.localStorage.setItem(
              "user",
              JSON.stringify({
                user_id: response.data.user_id,
                user_email: response.data.user_email,
                user_name: response.data.user_name,
                user_address: response.data.user_address,
                user_pincode: response.data.user_pincode,
              })
            );
            setUserCred({
              ...userCred,
              user_id: response.data.user_id,
              user_email: response.data.user_email,
              user_name: response.data.user_name,
              user_address: response.data.user_address,
              user_pincode: response.data.user_pincode,
            });
            window.location.href = '/user/home'
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Please retry");
        });
    }
  }, [state]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(url + "/user/login", {
        user_email: vals.user_email,
        user_password: vals.user_password,
      })
      .then((response) => {
        setVals({
          user_email: "",
          user_password: "",
        });
        if (response.data) {
          // storeLocalLogin(response.data.token);
          window.localStorage.setItem("token", response.data.token);
          dispatch({ type: "SET_TOKEN", payload: response.data.token });
        } else {
          alert("Please try again");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 403) {
          alert("Incorrect username or password");
        } else {
          alert("Please retry");
        }
      });
  };
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
                  type="email"
                  label="Email Address"
                  value={vals.user_email}
                  setValue={setValue}
                />
              </div>
              <div className="authflex">
                <Input
                  hfor="user_password"
                  type="password"
                  label="Password"
                  value={vals.user_password}
                  setValue={setValue}
                />
              </div>

              <div className="authflex">
                <button className="yelbtn" type="submit">
                  Login
                </button>
                <button
                  type="button"
                  className="redbtn"
                  onClick={() => {
                    window.location.href = "/user/register";
                  }}
                >
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
