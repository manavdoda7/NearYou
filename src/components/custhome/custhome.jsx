import React, { useContext, useEffect } from "react";
import Button from "../button/button";
import electrician from "../../Assets/svgs/electrician.svg"
import plumber from "../../Assets/svgs/plumber.svg"
import barber from "../../Assets/svgs/barber.svg"
import tailor from "../../Assets/svgs/tailor.svg"
import carpenter from "../../Assets/svgs/carpenter.svg"
import beautician from "../../Assets/svgs/beutician.svg"
import dnstore from "../../Assets/svgs/dnstore.svg"
import pharmacies from "../../Assets/svgs/pharmacies.svg"
import giftItems from "../../Assets/svgs/giftShop.svg"
import stationery from "../../Assets/svgs/stationery.svg"
import bookStores from "../../Assets/svgs/bookStore.svg"
import otherShops from "../../Assets/svgs/otherShops.svg"
import "./custhome.css";
import axios from 'axios'


const custhome = ({ onClick }) => {
  return (
    <React.Fragment>
      <div className="aisleHeadings">
        <h4>Services Aisle</h4>
        <h4>Shops Aisle</h4>
      </div>
      <div className="aisles">
        <section className="servicesAisle">
          <div className="outboundary">
            <div className="row">
              <button className="col-md card">
                <img src={electrician} alt="" />
                <p>Electrician</p>
              </button>
              <button className="col-md card">
                <img src={plumber} alt="" />
                <p>Plumber</p>
              </button>
            </div>
            <div className="row">
              <button className="col-md card">
              <img src={barber} alt="" />
              <p>Barber</p>
              </button>
              <button className="col-md card">
              <img src={tailor} alt="" />
              <p>Tailor</p>
              </button>
            </div>
            <div className="row">
            <button className="col-md card">
              <img src={carpenter} alt="" />
              <p>Carpenter</p>
              </button>
              <button className="col-md card">
              <img src={beautician} alt="" />
              <p>Beautician</p>
              </button>            
              </div>
            <div className="cardbottombutton">
              <Button value="Services" type="button" />
            </div>
          </div>
        </section>
        <section className="shopAisle">
          <div className="outboundary">
            <div className="row">
              <button type="button" onClick={()=>{onClick("Daily Needs")}} className="col-md card">
                <img src={dnstore} alt="" />
                <p>Daily Need Stores</p>
              </button>
              <button className="col-md card" onClick={()=>{onClick("Pharmacies")}}>
                <img src={pharmacies} alt="" />
                <p>Pharmacies</p>
              </button>
            </div>
            <div className="row">
              <button className="col-md card" onClick={()=>{onClick("Gift Items")}}>
              <img src={giftItems} alt="" />
                <p>Gift Items</p>
              </button>
              <button className="col-md card" onClick={()=>{onClick("Stationery")}}>
              <img src={stationery} alt="" />
                <p>Stationery</p>
              </button>
            </div>
            <div className="row">
              <button className="col-md card" onClick={()=>{onClick("Book Stores")}}>
              <img src={bookStores} alt="" />
                <p>Book Stores</p>
              </button>
              <button className="col-md card" onClick={()=>{onClick("Others")}}>
              <img src={otherShops} alt="" />
                <p>Others</p>
              </button>
            </div>
            <div className="cardbottombutton">
              <Button value="Shops" type="button" />
            </div>
          </div>
        </section>
      </div>
      <div style={{height:'20vh'}}></div>
    </React.Fragment>
  );
};

export default custhome;
