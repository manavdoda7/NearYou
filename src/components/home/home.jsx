import React from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import Door from "../../Assets/svgs/door.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Button from "../button/button";
// import Auth from ''
import "./home.css";

const Home = () => {
  const redirect = () => {
    window.location.href = "/shop/register";
  };
  return (
    <React.Fragment>
      <div className="overhide">
        <div className="ceil">
          <img src={Ceil} alt="" className="ceilsvg" />
          <Button type="button" value="eShop" />
        </div>
        <section className="logreg">
          <div className="buttonodiv container-fluid">
            <div className="login-button">
              <Button type="submit" value="Login as Customer" />
              <Button type="submit" value="Login as Provider" />
            </div>
          </div>
          <div className="reg-tab">
            <h4>Not yet Registered ?</h4>
            <div className="sreg">
              <button onClick={redirect}>
                Register as a Seller or Service Provider Here &gt;&gt;
              </button>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 lft">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              beatae quidem id delectus eius repellendus!
            </p>
            <img src={lgrass} alt="" />
          </div>

          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 centr">
            <img src={Door} alt="" />
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ryt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis eligendi id libero reiciendis eum cum!
            </p>
            <img src={rgrass} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
