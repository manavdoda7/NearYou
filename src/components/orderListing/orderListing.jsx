import React from "react";
import "./orderListing.css";

// 'Shop Here' 'Grab' 'Remove' 'Approve Deny'

const OrderListing = ({ arr, value }) => {
  const ordArr = arr.map((obj) => {
    return (
      <tr>
        <td>{obj.name}</td>
        <td>{obj.address}</td>
        <td>{obj.number}</td>
        <td>{obj.items}</td>
        <td>{obj.amount}</td>
        <td><button className="btn3">Approve</button><button className="btn3">Deny</button></td>
      </tr>
    );
  });

  const [showShops, setShowShops] = React.useState(true);

  return (
    <React.Fragment>
      <div className="shlheadings">
        <h1>{value}</h1>
      </div>
      <table className="ordertable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Items Ordered</th>
            <th>Billed Amount</th>
            <th>Approve/Deny</th>
          </tr>
        </thead>
        <tbody>{ordArr}</tbody>
      </table>
      <div style={{ height: "20vh" }}></div>
    </React.Fragment>
  );
};

export default OrderListing;
