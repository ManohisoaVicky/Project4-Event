import React from 'react'
import { Link } from 'react-router-dom'

import "./ProfileInfoCard.css"

function ProfileCardInfo({user, userID, paramID}) {

  let links = 
  userID === parseInt(paramID) ? (
    <div>
      <Link to={`/profile/edit/${user.id}`}>EDIT PROFILE</Link>
      <Link to="/event/new/">NEW EVENT</Link>
    </div>
  ) : <></>

  return (
    <div className='profile-card-container'>
    {
      user ? (
        <>
        <h2>{user.first_name} {user.last_name}</h2>
        <p>{user.username}</p>
        <p>{user.bio}</p>
        {links}
        </>
      ) : (
      <>
      <h2>PROFILE CARD INFO</h2>
      </>
      )
    }
    </div>
  )
}

export default ProfileCardInfo