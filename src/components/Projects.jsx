import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
export default function Projects() {
  return (
    <div>
        <h1>Projects</h1>
   <Link to="/projects/featured">Featured Projects</Link>
    < Link to="/projects/new">New Projects</Link>
    <Outlet />
   </div>

  )
}
