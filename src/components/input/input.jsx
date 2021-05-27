import React from 'react'
import './input.css'

const input = ({hfor, label, type}) => {
  return (
    <div className="authinpdiv">
        <label htmlFor={hfor} className="authlabel">{label}</label>
        <input type={type} class="authinput" id={hfor} required />
      </div>
  )
}

export default input
