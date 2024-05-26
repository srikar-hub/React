import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Success() {
 const Navigate=useNavigate();
  function toHome(){
   Navigate("/");
  }
  return (
    <div>
    <button onClick={toHome}>button</button>
    </div>
  )
}
