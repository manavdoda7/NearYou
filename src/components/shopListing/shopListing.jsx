import React from "react";
import "./shopListing.css";

// 'Shop Here' 'Grab' 'Remove' 'Approve Deny'

const shopListing = ({ arr, value,back }) => {


  const shopArr = arr.map((obj) => {
    return (
      <div className="card2" key={obj.shop_id}>
        <h4 className="head">{obj.shop_name}</h4>
        <h5 className="subhead">{obj.shop_owner_name}</h5>
        <button className="btn2">{(value==='Items Left' && 'Remove') || (value==='Orders Pending' && 'Approve') || (value==='Available Shops'&&'Shop Here')}</button>
      </div>
    );
  });


  const [showShops, setShowShops] = React.useState(true);

  return (
    <React.Fragment>
      <div className="shlheadings">
        <h1>{value}</h1>
      </div>
      <div className="alignsec">
        <section className="shlp">{showShops && shopArr}</section>
      </div>
      <div style={{ height: "20vh" }}></div>
      <button style={{"zIndex": 100, "marginLeft":"50%"}} onClick={back}> Back</button>
    </React.Fragment>
  );
};

export default shopListing;
