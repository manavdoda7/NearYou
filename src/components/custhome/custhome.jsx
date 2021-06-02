import React, { useContext, useEffect } from "react";
import Button from "../button/button";
import electrician from "../../Assets/svgs/electrician.svg"
import plumber from "../../Assets/svgs/plumber.svg"
import dnstore from "../../Assets/svgs/dnstore.svg"
import pharmacies from "../../Assets/svgs/pharmacies.svg"
import "./custhome.css";
import axios from 'axios'
import { RootContext } from '../../App'

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
              <button className="col-md card"></button>
              <button className="col-md card"></button>
            </div>
            <div className="row">
              <button className="col-md card"></button>
              <button className="col-md card"></button>
            </div>
            <div className="cardbottombutton">
              <Button value="To Services" type="button" />
            </div>
          </div>
        </section>
        <section className="shopAisle">
          <div className="outboundary">
            <div className="row">
              <button type="button" onClick={onClick} className="col-md card">
                <img src={dnstore} alt="" />
                <p>Daily Need Stores</p>
              </button>
              <button className="col-md card">
                <img src={pharmacies} alt="" />
                <p>Pharmacies</p>
              </button>
            </div>
            <div className="row">
              <button className="col-md card"></button>
              <button className="col-md card"></button>
            </div>
            <div className="row">
              <button className="col-md card"></button>
              <button className="col-md card"></button>
            </div>
            <div className="cardbottombutton">
              <Button value="To Shops" type="button" />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default custhome;
