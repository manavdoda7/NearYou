import React, { useEffect,useReducer } from "react";
import Ceil from "../../Assets/svgs/ceiling.svg";
import lgrass from "../../Assets/svgs/grassleft.svg";
import rgrass from "../../Assets/svgs/grassright.svg";
import Searchbar from "../searchBar/searchbar";
import Button from "../button/button";
import Custhome from '../custhome/custhome'
import ShopListing from '../shopListing/shopListing.jsx'
import {url} from '../../backend' 
import axios from 'axios'

const reducer = (state,action)=>{
  if(action.type === 'SET_CATEGORY'){
      // console.log(action.payload)
      return {
        ...state,
        categories: action.payload
      }
  }
  return state;
}

const custpages = () => {
    let [user,setUser] = React.useState("NearBuy");
    let [arr,setArr] = React.useState([]);

    let [state, dispatch] = useReducer(reducer,{
      categories:'none'
    })
    
    useEffect(()=>{
      if(state.categories !== 'none'){
        const data = {
          shop_type:state.categories
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
            alert('Something went wrong, please try again');
          })
      }
    },[state])

    const onClick = (category)=>{
      console.log('clicked',category)
      dispatch({type:'SET_CATEGORY',payload:category})
    }

    const [showHome, setShowHome] = React.useState(true);

    const back = ()=>{
      // console.log('Back button');
      setShowHome(true);
    }

    useEffect(()=>{
      let x = JSON.parse(window.localStorage.getItem('user'));
      if(x){
        setUser(x.user_name);
      }
    })
  
    //For searching queries
  const [searchProduct,setSearchProduct] = React.useState('');
  const searchChangeHandler = (val)=>{
      setSearchProduct(val);
  }
  const searchSubmitHandler = (e)=>{
    e.preventDefault();
      const data = {
        product_name: searchProduct
      }
      setSearchProduct('');
      axios.post(url+'/products/search',data)
      .then((response)=>{
          setArr(response.data)
          setShowHome(false);
      })
      .catch((err)=>{
        console.log(err);
        alert('An error occured please retry')
      })
  }

  return (
    <React.Fragment>
      <div className="ceil">
        <img src={Ceil} alt="" className="ceilsvg" />
        <Button type="button" value={user} />
        <Searchbar value = {searchProduct} searchChangeHandler={searchChangeHandler} searchSubmitHandler={searchSubmitHandler}/>
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
