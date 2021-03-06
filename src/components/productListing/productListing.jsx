import React from "react";


const shopListing = ({ arr, value, shopId, back}) => {

  const addToCart = (obj) => {
    // console.log(shopId)
    let x = {
      shop_id:shopId,
      product_id: obj.product_id,
      product_name: obj.product_name,
      product_brand: obj.product_brand,
      quantity: 1,
      product_price: obj.product_price
    };
    
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart===null) cart=[];
    cart.push(x);
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));

  }

  const shopArr = arr.map((obj) => {
    return (
      <div className="card2" key={obj.product_id}>
        <h5 className="head">{obj.product_brand}</h5>
        <h5 className="head">{obj.product_name}</h5>
        <h5 className="subhead">{obj.product_price}</h5>
        <button className="btn2" onClick={()=>addToCart(obj)}>{value}</button>
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
      <div className="back-btn">
      <button className="main-btn" onClick={back} style={{width:'300px'}}>
        Back
      </button>
      <button className="main-btn" onClick={()=>window.location.href='/cart'} style={{width:'300px'}}>Veiw Cart</button>
      </div>
    </React.Fragment>
  );
};

export default shopListing;
