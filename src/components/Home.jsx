import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {


    const Navigate=useNavigate();
    function NavigateToSuccessPage(){
           Navigate("/success");
    }
  return (
    <div>
 <button onClick={NavigateToSuccessPage}>Success</button>

    </div>
   
  )
}
