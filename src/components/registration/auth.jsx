import React,{useState} from "react";
import axios from 'axios'
import "./auth.css";
import Input from "../input/input";
import Select from "../select/select";

const Auth = () => {
  
  const [wait,setWait] = useState(false);
  const [inputVals, setInputVals] = useState({
    shop_name:"",
    shop_owner_name:"",
    shop_address:"",
    shop_type:"",
    other:"",
    shop_phone_number:"",
    shop_pincode:"",
    shop_password:"",
  })

  const valueHandler = (name,val)=>{
    setInputVals({
      ...inputVals,
      [name]: val
    })
  }

  const registerUser = (e)=>{
    setWait(true);
      e.preventDefault();
      const data = {
        shop_name: inputVals.shop_name,
        shop_owner_name: inputVals.shop_owner_name,
        shop_password: inputVals.shop_password,
        shop_pincode: inputVals.shop_pincode,
        shop_address:inputVals.shop_address,
        shop_phone_number:inputVals.shop_phone_number,
        shop_type: inputVals.other || inputVals.shop_type
      }

      setInputVals({
        shop_name:"",
        shop_owner_name:"",
        shop_address:"",
        shop_type:"",
        other:"",
        shop_phone_number:"",
        shop_pincode:"",
        shop_password:"",
      })

      axios.post('http://localhost:5000/shops/register',data)
        .then(response=>{
            setWait(false);
            window.location.href = '/shop/login'
          })
          .catch(err=>{
            console.log('here1')
            if(err.response){
              if(err.response.status == 409){
                setWait(false);
                window.location.href = '/shop/login'
              }
            }else{
              window.location.reload();
              alert('Please retry at some other time')
            }
        })

  }

  if(!wait){
    return (
      <div className="authBody">
        <article>
          <h1 className="shopregh">Shop Registration</h1>
          <form className="authform" onSubmit={registerUser}>
            <div>
              <div className="authflex">
                <Input hfor="shop_name" type="text" label="Shop Name"  value={inputVals.shop_name} setValue={valueHandler}/>
                <Input hfor="shop_phone_number" type="tel" label="Phone Number" value={inputVals.shop_phone_number} setValue={valueHandler}/>
              </div>
              <div className="authflex">
                <Input hfor="shop_owner_name" type="text" label="Owner Name" value={inputVals.shop_owner_name} setValue={valueHandler}/>
                <Input hfor="shop_pincode" type="number" label="Pincode" value={inputVals.shop_pincode} setValue={valueHandler}/>
              </div>
              <div className="authflex">
                <Input hfor="shop_address" type="text" label="Shop Address" value={inputVals.shop_address} setValue={valueHandler}/>
                <Input hfor="shop_password" type="password" label="Password" value={inputVals.shop_password} setValue={valueHandler}/>
              </div>
              <div className="authflex">
                <Select
                  hfor="shop_type"
                  label="Shop Type"
                  options={[
                    "",
                    "Daily Needs",
                    "Chemist",
                    "Gift Items",
                    "Stationery",
                    "Others",
                  ]}
                  value = {inputVals.shop_type}
                  setValue = {valueHandler}
                />
                <Input
                  hfor="other"
                  type="text"
                  label="If Others(then specify)"
                  value={inputVals.other}
                  setValue={valueHandler}
                  notReq={true}
                />
              </div>
              <div className="authflex">
                <button className="yelbtn" type="submit">Register</button>
                <button type="button" className="redbtn">
                  Login
                </button>
              </div>
            </div>
          </form>
        </article>
      </div>
    );
  }else{
    return (
      <div>
        Please wait until you are redirected.
      </div>
    );
  }
};

export default Auth;
