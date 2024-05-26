import React from 'react'
import data from './Data'
import { useParams } from 'react-router-dom'
export default function UserDetails() {
 const {userId}=useParams();
 const findTheINdividualData = data.find((eachMember)=>{
   return eachMember.id == userId;
 })
  return (
    <div>
        <h1>USerdetails</h1>
    <h1>{findTheINdividualData.name}</h1>
    <h1>{findTheINdividualData.email}</h1>
    </div>
  )
}

