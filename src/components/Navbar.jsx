import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </nav>
    </div>
  )
}
