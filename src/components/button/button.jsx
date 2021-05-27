import React from 'react'
import './button.css'

const Button = ({value,type, oncl})=>{
    return <button className="main-btn" type={type} onClick={oncl}>{value}</button>;
}

export default Button;