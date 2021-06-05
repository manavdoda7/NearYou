import React from "react";
import "./shopListing.css";

// 'Shop Here' 'Grab' 'Remove' 'Approve Deny'

const shopListing = ({ arr, value, back }) => {
  console.log(arr);
  const shopArr = arr.map((obj) => {
    if(arr.length==0) return <h1>No Items matched your search.</h1>
    else if (arr[0].shop_type === "Daily Needs" ||arr[0].shop_type === "Gift Items" ||arr[0].shop_type === "Pharmacies" ||arr[0].shop_type === "Stationery" ||arr[0].shop_type === "Book Stores" ) {
      return (
        <div className="card2" key={obj.shop_id}>
          <h4 className="head">{obj.shop_name}</h4>
          <h5 className="subhead">{obj.shop_owner_name}</h5>
          <button className="btn2">
            {(value === "Items Left" && "Remove") ||
              (value === "Orders Pending" && "Approve") ||
              (value === "Available Shops" && "Shop Here")}
          </button>
        </div>
      );
      } else {
        return (
          <div className="card2" key={obj.shop_id}>
          <h4 className="head">{obj.shop_name}</h4>
          <h5 className="subhead">{obj.shop_type}</h5>
          <button className="btn2">
            {(value === "Items Left" && "Remove") ||
              (value === "Orders Pending" && "Approve") ||
              (value === "Available Shops" && "Shop Here")}
          </button>
        </div>
        )
      }
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
      <div className="back-btn">
      <button className="main-btn" onClick={back}>
        {" "}
        Back
      </button>
      </div>
      
    </React.Fragment>
  );
};

export default shopListing;
