import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { myUserProfile } from '../../utils/userService'

import ProfileCardInfo from "../../components/ProfileInfoCard/ProfileCardInfo"
import "./ProfilePage.css"

function ProfilePage() {

  const [user, setUser] = useState()

  const userID = useParams().userID

  useEffect(() => {
    async function getUserInfo() {
      const user = await myUserProfile(userID)
      setUser(user)
    }
    getUserInfo()
  }, [userID])

  return (
    <>
    <ProfileCardInfo user={user} />
    <div className='user-events-container'>
      
    </div>
    </>
  )
}

export default ProfilePage