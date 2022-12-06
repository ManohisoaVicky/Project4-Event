import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { myUserProfile } from '../../utils/userService'
import useUser from '../../hooks/userUser'

import "./NavBar.css"

function NavBar({state, setState}) {

  const { handleLogOut, user } = useUser()

  useEffect(() => {
    if (user) {
    async function getUserInfo() {
      const theUser = await myUserProfile(user.id)
      setState(theUser)
    }
    getUserInfo()
  }
  }, [setState, user])

  let nav = user && state ? (
    <>
    <NavLink to="" className="nav-logo">EVENTECH</NavLink>
    <div className='logged-in-links'>
      <NavLink to="" onClick={handleLogOut} id="logout-link" >LOG OUT</NavLink>
      <NavLink to={`/profile/${state.id}`} id="user-link">{state.first_name}</NavLink>
    </div>
    </>
  ): (
    <>
    <NavLink to="" className="nav-logo">EVENTECH</NavLink>
    <div className='logged-out-links'>
      <NavLink to="/signup" id="signup-link">SIGN UP</NavLink>
      <NavLink to="/login" id="login-link">LOG IN</NavLink>
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