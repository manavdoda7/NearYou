import React, { useEffect } from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Searchbar from "../searchBar/searchbar";
import Button from "../button/button";
import Custhome from '../custhome/custhome'
import ShopListing from '../shopListing/shopListing.jsx'
import {url} from '../../backend' 
import axios from 'axios'

const custpages = () => {
    let [user,setUser] = React.useState("NearBuy");
    let [arr,setArr] = React.useState([]);
    let [categories, setCategories] = React.useState("none")
    
    useEffect(()=>{
      if(categories !== 'none'){
        const data = {
          shop_type:categories
        }
        console.log(data)
        axios.post(url+'/shops/getShops', data)
          .then(response=>{
            console.log(response)
            setArr(response.data);
            setShowHome(false)
          })
          .catch(err=>{
            console.log(err)
          })
      }
    },[categories])

    const onClick = (category)=>{
      console.log('clicked',category)
      setCategories(category);
    }

    const [showHome, setShowHome] = React.useState(true);

    const back = ()=>{
      // console.log('Back button');
      setShowHome(true);
    }

    useEffect(()=>{
      let x = JSON.parse(window.localStorage.getItem('user'));
      if(x){
        console.log('here');
        setUser(x.user_name);
        console.log(user)
      }
    })

  return (
    <React.Fragment>
      <div className="ceil">
        <img src={Ceil} alt="" className="ceilsvg" />
        <Button type="button" value={user} />
        <Searchbar />
      </div>
      {showHome && <Custhome onClick={onClick}/>}
      {!showHome && <ShopListing arr = {arr} value = "Available Shops" back={back}/>}
      <div className="custgrasses">
        <img src={lgrass} alt="" />
        <img src={rgrass} alt="" />
      </div>
    </React.Fragment>
  );
};

export default custpages;
