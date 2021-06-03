import React from "react";
import "./shopListing.css";

// 'Shop Here' 'Grab' 'Remove' 'Approve Deny'

const shopListing = ({ arr, value }) => {


  const shopArr = arr.map((obj) => {
    return (
      <div className="card2">
        <h4 className="head">{obj.fname}</h4>
        <h5 className="subhead">{obj.sname}</h5>
        <button className="btn2">{(value==='Items Left' && 'Remove') || (value==='Orders Pending' && 'Approve')}</button>
        {value==='Orders Pending' && <button className="btn2">Deny</button>}
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
    </React.Fragment>
  );
};

export default shopListing;
