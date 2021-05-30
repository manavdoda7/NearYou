import React, { useState } from "react";
import "./addProduct.css";
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
              <Input
                hfor="shop_name"
                type="text"
                label="Shop Name"
              />
              <Input
                hfor="shop_phone_number"
                type="tel"
                label="Phone Number"
              />
            </div>
            <div className="authflex">
              <Input
                hfor="shop_owner_name"
                type="text"
                label="Owner Name"
              />
              <Input
                hfor="shop_pincode"
                type="number"
                label="Pincode"
              />
            </div>
            <div className="authflex">
              <Input
                hfor="shop_address"
                type="text"
                label="Shop Address"
              />
              <Input
                hfor="shop_password"
                type="password"
                label="Password"
              />
            </div>
            <div className="authflex">
              <Select
                hfor="shop_type"
                label="Shop Type"
                options={[
                  "Daily Needs",
                  "Chemist",
                  "Gift Items",
                  "Stationery",
                  "Others",
                ]}
              />
              <Input
                hfor="other"
                type="text"
                label="If Others(then specify)"
                notReq={true}
              />
            </div>
            <div className="authflex">
              <button className="yelbtn" type="submit">
                Register
              </button>
              <button
                onClick={() => {
                  window.location.href = "/shop/login";
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
