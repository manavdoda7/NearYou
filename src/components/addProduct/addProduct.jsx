import React, { useState } from "react";
import "./addProduct.css";
import Input from "../input/input";

const Auth = () => {
  return (
    <article>
      <h1 className="shopregh">Add Items</h1>
      <form className="additemform">
        <div>
          <Input hfor="product_name" type="text" label="Product Name" />
          <Input hfor="brand" type="text" label="Product Brand" />
          <Input hfor="your_price" type="number" label="Selling Price" />
          <button className="yelbtn" type="submit">Add Item</button>
        </div>
      </form>
    </article>
  );
};

export default Auth;
