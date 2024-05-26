import React from 'react'
import data from './Data.jsx'
import { Link } from 'react-router-dom'
export default function Users() {
  return (
    <div>
       { data.map((eachobj)=>{
        const {id,name}=eachobj;
            return <Link to={`/users/${id}`} key={id}>
                <h3>{name}</h3>
            </Link>
        })}
    </div>
  )
}
