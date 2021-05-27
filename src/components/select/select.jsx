import React from 'react'
import './select.css'

const select = ({ hfor, label, options, value, setValue}) => {
    return (
        <div className="authselectdiv">
        <label htmlFor={hfor} className="authlabel">{label}</label>
        <select className="authselect" value={value} onChange={(e)=>{setValue(hfor,e.target.value)}} >
          {options.map((option,index) => {
              return (<option key={index} value={option} >{option}</option>);
          })}
        </select>
      </div>
    )
}

export default select
