import React, { useState } from 'react'

export default function Index() {
    const [firstName,setfirstName]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");


    const changeFirstName=(e)=>{
          console.log(e.target.value)
          setfirstName(e.target.value)
    }
    const changeEmail=(e)=>{
        setemail(e.target.value)
    }
   const changePassword=(e)=>{
          setpassword(e.target.value)        
   }
   const get=(e)=>{
    e.preventDefault();
    const userObj={
        firstName:firstName,
        email:email,
        password:password,
    }
    console.log(userObj);
   }
 
  return (
    <div>
        <form onSubmit={get}>
            <input type="text" name="firstName" id="firstName" placeholder='Enter name'value={firstName} onChange={changeFirstName}/>
            <input type="email" name="email" id="email" placeholder='Enter email' value={email} onChange={changeEmail}/>
             <input type="password" name="password" id="password" placeholder='ENter password' value={password} onChange={changePassword}/>
             <button>Submit</button>
        </form>
    </div>
  )
}
