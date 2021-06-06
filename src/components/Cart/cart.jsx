import React, {useEffect} from "react";
import axios from 'axios'
import {url} from '../../backend'

// 'Shop Here' 'Grab' 'Remove' 'Approve Deny'

const OrderListing = () => {

  const [arr, setArr] = React.useState([]);
  useEffect(() => {
      axios.get(url+'/user/dashboard',{
        headers:{
          authorization: localStorage.getItem('token')
        }
      })
      .catch(err=>{
        alert('Please login first');
        window.location.href = '/user/login';
      })
      let cart = JSON.parse(localStorage.getItem('cart'));
      if(cart!==null) {
          setArr(cart);
      }
    }, [])
    
    const addQuantity = (product_id)=>{
      console.log('CHal bhai')
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart = cart.map(obj=>{
        if(obj.product_id===product_id){
          return {
            ...obj,
            product_price: obj.product_price*(obj.quantity+1)/obj.quantity,
            quantity: obj.quantity + 1
          }
        }else{
          return {
            ...obj
          }
        }
      })
      setArr(cart)
      localStorage.setItem('cart',JSON.stringify(cart))
    
      
  }

  const ordArr = arr.map((obj) => {
    return (
      <tr>
        <td>{obj.product_name}</td>
        <td>{obj.product_brand}</td>
        <td>{obj.quantity}</td>
        <td>{obj.product_price}</td>
        <td><button className="btn3" onClick={()=>addQuantity(obj.product_id)}>Add</button></td>
        <td><button className="btn3">Remove</button></td>
      </tr>
    );
  });

  const [showShops, setShowShops] = React.useState(true);

  return (
    <React.Fragment>
      <div className="shlheadings">
        <h1>Your Cart</h1>
      </div>
      <table className="ordertable">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Brand</th>
            <th>Quantity</th>
            <th>Selling Price</th>
            <th>Add Quantity</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>{ordArr}</tbody>
      </table>
      <div style={{ height: "20vh" }}></div>
    </React.Fragment>
  );
};

export default OrderListing;
