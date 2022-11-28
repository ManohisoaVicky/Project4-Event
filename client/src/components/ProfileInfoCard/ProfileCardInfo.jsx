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
      user && (
        <div className='profile-card-info'>
          <h2>{user.first_name} {user.last_name}</h2>
          <p className='profile-username'>{user.username && "@"}{user.username}</p>
          <p className='profile-bio'>{user.bio}</p>
        {links}
        </div>
      ) 
    }
    </div>
  )
}

export default ProfileCardInfo