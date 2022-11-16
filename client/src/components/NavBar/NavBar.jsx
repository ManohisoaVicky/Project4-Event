import React from 'react'
import { NavLink } from 'react-router-dom'
import useUser from '../../hooks/userUser'

import "./NavBar.css"

function NavBar() {

  const { handleLogOut, user } = useUser()

  let nav = user ? (
    <>
    <NavLink to="" className="nav-logo">EVENT APP</NavLink>
    <div className='logged-in-links'>
      <NavLink to="" onClick={handleLogOut} >LOG OUT</NavLink>
      <NavLink to={`/profile/${user.sub}`}>{user.first_name}</NavLink>
    </div>
    </>
  ): (
    <>
    <NavLink to="" className="nav-logo">EVENT APP</NavLink>
    <div className='logged-out-links'>
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