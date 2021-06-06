import React, { useState } from "react";
import "./addProduct.css";
import Input from "../input/input";
import basket from "../../Assets/imgs/basket.png"
import axios from "axios";
import {url} from '../../backend'

const Auth = () => {
  const [inputVals,setInputVals] = useState({
    product_name:'',
    product_brand:'',
    product_price:'',
    product_mrp:''
  })

  const setValue = (name,val)=>{
    setInputVals({
      ...inputVals,
      [name]:val
    })
  }
  
  const submitHandler = (e)=>{
    e.preventDefault();
    let x = window.localStorage.getItem('token');
    if(x){
      const data = {
          product_name: inputVals.product_name,
          product_brand: inputVals.product_brand,
          product_price: inputVals.product_price,
          product_mrp: inputVals.product_mrp 
      }
      axios
        .post(url+'/products/addProduct',data,{
            headers:{
              'authorization': x
            },
        })
        .then((response)=>{
            setInputVals({
              product_name:'',
              product_brand:'',
              product_price:'',
              product_mrp:''
            })
            window.location.reload();
        })
        .catch(err=>{
          console.log(err)
        })
    }else{
        alert('Login first');
    }
  }

  return (
    <article>
      <h1 className="shopaddh">Add Items</h1>
      <form className="additemform" onSubmit={submitHandler}>
        <div style={{display: "flex"}}>
        <div style={{marginLeft: "50px"}}>
          <Input hfor="product_name" type="text" label="Product Name" setValue={setValue} value={inputVals.product_name}/>
          <Input hfor="product_brand" type="text" label="Product Brand" setValue={setValue} value={inputVals.product_brand}/>
          <Input hfor="product_price" type="number" label="Selling Price" setValue={setValue} value={inputVals.product_price}/>
          <Input hfor="product_mrp" type="number" label="MRP" setValue={setValue} value={inputVals.product_mrp}/>
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
