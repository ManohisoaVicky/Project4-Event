import React from 'react'
import { NavLink } from 'react-router-dom'
import useUser from '../../hooks/userUser'

import "./NavBar.css"

function NavBar() {

  const { user } = useUser()

  let nav = user ? (
    <>
    <NavLink to="" className="nav-logo">EVENT APP</NavLink>
    </>
  ): (
    <>
    <NavLink to="" className="nav-logo">EVENT APP</NavLink>
    <div className='auth-links'>
      <NavLink to="/signup">SIGN UP</NavLink>
      <NavLink to="/login">LOG IN</NavLink>
    </div>
    </>
  )

  return (
    <div className='navBar-container'>
      {nav}
    </div>
  )
}

export default NavBar