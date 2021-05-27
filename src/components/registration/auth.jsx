import React from "react";
import "./auth.css";
import Input from "../input/input";
import Select from "../select/select";

const Auth = () => {
  return (
    <div className="authBody">
      <article>
        <h1 className="shopregh">Shop Registration</h1>
        <form className="authform">
          <div>
            <div className="authflex">
              <Input hfor="shopName" type="text" label="Shop Name" />
              <Input hfor="phoneNo" type="tel" label="Phone Number" />
            </div>
            <div className="authflex">
              <Input hfor="ownerName" type="text" label="Owner Name" />
              <Input hfor="pCode" type="number" label="Pincode" />
            </div>
            <div className="authflex">
              <Input hfor="sAddress" type="text" label="Shop Address" />
              <Input hfor="password" type="password" label="Password" />
            </div>
            <div className="authflex">
              <Select
                hfor="sType"
                label="Shop Type"
                options={[
                  "",
                  "Daily Needs",
                  "Chemist",
                  "Gift Items",
                  "Stationery",
                  "Others",
                ]}
              />
              <Input
                hfor="others"
                type="text"
                label="If Others(then specify)"
              />
            </div>
            <div className="authflex">
              <button className="yelbtn">Register</button>
              <button type="button" className="redbtn">
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
