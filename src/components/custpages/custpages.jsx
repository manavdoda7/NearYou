import React from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Searchbar from "../searchBar/searchbar";
import Button from "../button/button";
import Custhome from '../custhome/custhome'
import ShopListing from '../shopListing/shopListing.jsx'



const custpages = () => {
    const [showHome, setShowHome] = React.useState(true);
  return (
    <React.Fragment>
      <div className="ceil">
        <img src={Ceil} alt="" className="ceilsvg" />
        <Button type="button" value="NearYou" />
        <Searchbar />
      </div>
      {showHome && <Custhome onClick={ () => setShowHome(false)}/>}
      {!showHome && <ShopListing/>}
      <div className="custgrasses">
        <img src={lgrass} alt="" />
        <img src={rgrass} alt="" />
      </div>
    </React.Fragment>
  );
};

export default custpages;
