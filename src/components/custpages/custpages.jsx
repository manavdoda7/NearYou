import React from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Searchbar from "../searchBar/searchbar";
import Button from "../button/button";
import Custhome from '../custhome/custhome'
import ShopListing from '../shopListing/shopListing.jsx'


const arr = [
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
  { fname: "John's Mart", sname: "John Smith" },
];



const custpages = () => {

    const [showHome, setShowHome] = React.useState(true);

    /* let user = JSON.parse(localStorage.getItem('user'));
    const [userCred, setUserCred] = useState({
       user_id: (user)?user.user_id:'',
       user_name: (user)?user.user_name:'',
       user_email: (user)?user.user_email:'',
       user_pincode: (user)?user.user_pincode:'',
       user_address: (user)?user.user_address:''
    }); */

  return (
    <React.Fragment>
      <div className="ceil">
        <img src={Ceil} alt="" className="ceilsvg" />
        <Button type="button" value={ JSON.parse(localStorage.getItem('user')).user_name ||"NearBuy"} />
        <Searchbar />
      </div>
      {showHome && <Custhome onClick={ () => setShowHome(false)}/>}
      {!showHome && <ShopListing arr = {arr} value = "Available Shops"/>}
      <div className="custgrasses">
        <img src={lgrass} alt="" />
        <img src={rgrass} alt="" />
      </div>
    </React.Fragment>
  );
};

export default custpages;
