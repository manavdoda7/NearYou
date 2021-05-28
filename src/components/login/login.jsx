import React from "react";
import Input from "../input/input";

const Login = () => {
  return (
    <React.Fragment>
      <div className="authBody">
        <article>
          <h1 className="shopregh">Shop Login</h1>
          <form className="authform">
            <div>
              <div className="authflex">
              <Input
                hfor="shop_phone_number"
                type="tel"
                label="Phone Number"
              />
              </div>
              <div className="authflex">
              <Input
                hfor="shop_password"
                type="password"
                label="Password"
              />
              </div>

              <div className="authflex">
                <button className="yelbtn" type="submit">
                  Login
                </button>
                <button type="button" className="redbtn">
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
