import React from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Button from "../button/button";
import Searchbar from '../searchBar/searchbar'
import electrician from "../../Assets/svgs/electrician.svg"
import plumber from "../../Assets/svgs/plumber.svg"

import dnstore from "../../Assets/svgs/dnstore.svg"
import pharmacies from "../../Assets/svgs/pharmacies.svg"
import "./custhome.css";

const custhome = () => {
  return (
    <React.Fragment>
      <div className="ceil">
        <img src={Ceil} alt="" className="ceilsvg" />
        <Button type="button" value="eShop" />
        <Searchbar/>
      </div>
      <div className="aisleHeadings">
        <h4>Services Aisle</h4>
        <h4>Shops Aisle</h4>
      </div>
      <div className="aisles">
        <section className="servicesAisle">
          <div className="outboundary">
            <div className="row">
              <div className="col-md card">
                  <img src={electrician} alt="" />
                  <p>Electrician</p>
              </div>
              <div className="col-md card">
              <img src={plumber} alt="" />
              <p>Plumber</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md card"></div>
              <div className="col-md card"></div>
            </div>
            <div className="row">
              <div className="col-md card"></div>
              <div className="col-md card"></div>
            </div>
            <div className="cardbottombutton">
              <Button value="To Services" type="button" />
            </div>
          </div>
        </section>
        <section className="shopAisle">
          <div className="outboundary">
            <div className="row">
              <div className="col-md card">
                  <img src={dnstore} alt="" />
                  <p>Daily Need Stores</p>
              </div>
              <div className="col-md card">
                  <img src={pharmacies} alt="" />
                  <p>Pharmacies</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md card"></div>
              <div className="col-md card"></div>
            </div>
            <div className="row">
              <div className="col-md card"></div>
              <div className="col-md card"></div>
            </div>
            <div className="cardbottombutton">
              <Button value="To Shops" type="button" />
            </div>
          </div>
        </section>
      </div>
      <div className="custgrasses">
        <img src={lgrass} alt="" />
        <img src={rgrass} alt="" />
      </div>
    </React.Fragment>
  );
};

export default custhome;
