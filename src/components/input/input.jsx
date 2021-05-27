import React from 'react'
import './input.css'

const input = ({hfor, label, type, value,setValue}) => {

  return (
    <div className="authinpdiv">
        <label htmlFor={hfor} className="authlabel">{label}</label>
        <input type={type} className="authinput" id={hfor} value={value}  onChange={(e)=>{setValue(hfor,e.target.value)}}/>
      </div>
  )
}

export default input
