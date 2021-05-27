import React from 'react'
import './input.css'

const input = ({hfor, label, type, value,setValue,notReq}) => {

  return (
    <div className="authinpdiv">
        <label htmlFor={hfor} className="authlabel">{label}</label>
        {notReq 
          ?<input type={type} className="authinput"  id={hfor} value={value}  onChange={(e)=>{setValue(hfor,e.target.value)}}/> :<input type={type} className="authinput" required id={hfor} value={value}  onChange={(e)=>{setValue(hfor,e.target.value)}}/>
        }
      </div>
  )
}

export default input
