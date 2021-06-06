import React, { useEffect } from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import Door from "../../Assets/svgs/door.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Button from "../button/button";
import axios from 'axios'
// import Auth from ''
import "./home.css";

const Home = () => {
  const [user, setUser] = React.useState('NearBuy');
  const redirect = () => {
    window.location.href = "/shop/register";
  };
  const redirectCustLogin = ()=>{
    window.location.href = '/user/login'
  }
  const redirectProvidLogin = ()=>{
    window.location.href = '/shop/dashboard'
  }


  useEffect(()=>{
    let x = JSON.parse(localStorage.getItem('user'));
    if(x){
      setUser(x.user_name);
    }
  })

  return (
    <React.Fragment>
      <div className="overhide">
        <div className="ceil">
          <img src={Ceil} alt="" className="ceilsvg" />
          <Button type="button" value={user} />
        </div>
        <section className="logreg">
          <div className="buttonodiv container-fluid">
            <div className="login-button">
              <Button  value="Login as Customer" oncl={redirectCustLogin}/>
              <Button type="submit" value="Login as Provider" oncl={redirectProvidLogin} />
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
             Near Buy is  A one step solutions to your  daily necessities. Are you a service provider?  Make
            </p>
            <img src={lgrass} alt="" />
          </div>

          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 centr">
            <img src={Door} alt="" />
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ryt">
            <p>
               a name for yourself in your city and take your business to a whole new level. Register now.
            </p>
            <img src={rgrass} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
