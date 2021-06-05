import React from "react";

// 'Shop Here' 'Grab' 'Remove' 'Approve Deny'

const shopListing = ({ arr, value, removeProduct}) => {


  const shopArr = arr.map((obj) => {
    return (
      <div className="card2" key={obj.product_id}>
        <h5 className="head">{obj.product_brand}</h5>
        <h5 className="head">{obj.product_name}</h5>
        <h5 className="subhead">{obj.product_price}</h5>
        <button className="btn2" onClick={()=>{removeProduct(obj.product_id)}}>{value}</button>
      </div>
    );
  });


  const [showShops, setShowShops] = React.useState(true);

  return (
    <React.Fragment>
      <div className="shlheadings">
        <h1>Items Available</h1>
      </div>
      <div className="alignsec">
        <section className="shlp">{showShops && shopArr}</section>
      </div>
      <div style={{ height: "20vh" }}></div>
    </React.Fragment>
  );
};

export default shopListing;