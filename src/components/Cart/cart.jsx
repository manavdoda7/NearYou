import React, {useEffect} from "react";

// 'Shop Here' 'Grab' 'Remove' 'Approve Deny'

const OrderListing = () => {

  const [arr, setArr] = React.useState([]);
  useEffect(() => {
      let cart = JSON.parse(localStorage.getItem('cart'));
      if(cart!==null) {
          setArr(cart);
      }
  }, [])
  
  const ordArr = arr.map((obj) => {
    return (
      <tr>
        <td>{obj.product.product_name}</td>
        <td>{obj.product.product_brand}</td>
        <td>{obj.product.quantity}</td>
        <td>{obj.product.product_price}</td>
        <td><button className="btn3" onClick={addQuantity}>Add</button></td>
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
