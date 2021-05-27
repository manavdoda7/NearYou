import React from 'react'
import './select.css'

const select = ({ hfor, label, options }) => {
    return (
        <div className="authselectdiv">
        <label htmlFor={hfor} className="authlabel">{label}</label>
        <select class="authselect">
          {options.map((options) => {
              return (<option>{options}</option>);
          })}
        </select>
      </div>
    )
}

export default select
