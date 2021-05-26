import React from 'react'
import './button.css'

const Button = ({value,type})=>{
    return <>
        <button className="main-btn" type={type}>{value}</button>
    </>;
}

export default Button;