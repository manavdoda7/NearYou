import React, { useState } from "react";
import "./addProduct.css";
import Input from "../input/input";
import Select from "../select/select";

const Auth = () => {
  return (
    <div className="authBody">
      <article>
        <h1 className="shopregh">Add Items</h1>
        <form className="authform">
          <div>
            <div className="authflex">
              <Input hfor="product_name" type="text" label="Product Name" />
              <Input
                hfor="brand"
                type="text"
                label="Product Brand"
              />
            </div>
            <div className="authflex">
              <Input hfor="mrp" type="number" label="M.R.P." />
              <Input hfor="your_price" type="number" label="Selling Price" />
            </div>
            <div className="authflex">
              <Input
                hfor="additional_charges"
                type="number"
                label="Additional Charges(If Any)"
              />
              <Input
                hfor="quantity_available"
                type="number"
                label="Quantity Available"
              />
            </div>
            <button className="yelbtn" type="submit">
              Add Item
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default Auth;
