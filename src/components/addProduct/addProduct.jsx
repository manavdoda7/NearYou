import React, { useState } from "react";
import "./addProduct.css";
import Input from "../input/input";
import basket from "../../Assets/imgs/basket.png"

const Auth = () => {
  return (
    <article>
      <h1 className="shopregh">Add Items</h1>
      <form className="additemform">
        <div style={{display: "flex"}}>
        <div style={{marginLeft: "50px"}}>
          <Input hfor="product_name" type="text" label="Product Name" />
          <Input hfor="brand" type="text" label="Product Brand" />
          <Input hfor="your_price" type="number" label="Selling Price" />
          <button className="yelbtn" type="submit">Add Item</button>
        </div>
        <div>
        <img src={basket} style={{marginLeft: "277px", marginRight: "50px"}} alt="" />
        </div>
        </div>
      </form>
    </article>
  );
};

export default Auth;
