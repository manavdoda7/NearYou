import React, { useEffect } from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Button from "../button/button";
import ShopListing from "../shopListing/shopListing";
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
const arr = [
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
  { fname: "Grapes", sname: "50.00 /KG" },
];

const ShopDashboard = ({ data }) => {
  let [shop,setShop] = React.useState('NearBuy');

  useEffect(()=>{
    let x = JSON.parse(localStorage.getItem('shop'));
    if(x){
      setShop(x.shop_name);
    }
  })

  let [products,setProducts] = React.useState([]);

  useEffect(()=>{
      axios.get(url+'/products')
      .then((response)=>{
       if(response.data){
         let obj = response.data;
         setProducts(response.data);
       }
      })
      .catch(err=>{
        console.log(err);
      })
  },[])

  return (
    <React.Fragment>
      <div className="ceil">
        <img src={Ceil} alt="" className="ceilsvg" />
        <Button type="button" value={shop} />
      </div>
      <OrderListing arr={ordArr} value="Orders Pending" />
      <section>
        <div>
          <ShopListing arr={products} value="Items Left" />
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
