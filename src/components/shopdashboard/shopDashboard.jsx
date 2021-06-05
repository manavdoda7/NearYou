import React, { useEffect } from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Button from "../button/button";
import PrivateProductListing from '../privateProductListing/privateProductListing'
import AddProduct from "../addProduct/addProduct";
import OrderListing from "../orderListing/orderListing";
import {url} from '../../backend'
import './shopDashboard.css'
import axios from "axios";

const ordArr = [
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
  {
    name: "Rahul",
    address: "#1536, Model Town, Delhi",
    number: "9876543210",
    items: "Nestle Maggi",
    amount: "100Rs",
  },
];


const ShopDashboard = ({ data }) => {
  let [shop,setShop] = React.useState('NearBuy');
  useEffect(()=>{
    axios.get(url+'/shops/dashboard',{
      headers: {
       authorization:localStorage.getItem('token')
      }
    })
    .catch((err)=>{
        window.location.href = '/shop/login';
    })
    let x = JSON.parse(localStorage.getItem('shop'));
    if(x){
      setShop(x.shop_name);
    }
  })

  let [products,setProducts] = React.useState([]);

  useEffect(()=>{
    let x = JSON.parse(localStorage.getItem('shop'));
    if(x){
      const data = {
          shop_id: x.shop_id
      }
      axios.post(url+'/products',data)
      .then((response)=>{
       if(response.data){
         setProducts(response.data);
         console.log(response.data)
       }
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },[])
  
  const removeProduct = (product_id)=>{
    setProducts((prevState)=>{
      return prevState.filter(obj=> obj.product_id !== product_id)
    })
    const data = {
      product_id
    }
    axios.post(url+'/products/delete',data)
    .catch(err=>{
      alert('Please refresh and try to delete again')
    })
  }

  return (
    <React.Fragment>
      <div className="ceil">
        <img src={Ceil} alt="" className="ceilsvg" />
        <Button type="button" value={shop} />
      </div>
      <OrderListing arr={ordArr} value="Orders Pending" />
      <section>
        <div>
          <PrivateProductListing arr={products} value='Remove' removeProduct={removeProduct}/>
        </div>
        <div>
          <AddProduct/>
        </div>
      </section>
      <div className="custgrasses">
        <img src={lgrass} alt="" />
        <img src={rgrass} alt="" />
      </div>
    </React.Fragment>
  );
};

export default ShopDashboard;
