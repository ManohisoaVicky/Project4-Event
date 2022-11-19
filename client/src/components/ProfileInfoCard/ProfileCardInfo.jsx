import React from 'react'
import { Link } from 'react-router-dom'
import useUser from '../../hooks/userUser'

import "./ProfileInfoCard.css"

function ProfileCardInfo() {

  const { user } = useUser()

  return (
    <div className='profile-card-container'>
    {
      user ? (
        <>
        <h2>{user.first_name} {user.last_name}</h2>
        <p>{user.username}</p>
        <p>{user.bio}</p>
        <Link to={`/profile/edit/${user.id}`}>EDIT PROFILE</Link>
        </>
      ) : (
      <>
      <h2>Hello</h2>
      </>
      )
    }
    </div>
  )
}

export default ProfileCardInfo