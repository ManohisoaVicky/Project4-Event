import React from 'react'
import { Link } from "react-router-dom"

import ProfileCardInfo from "../../components/ProfileInfoCard/ProfileCardInfo"
import "./ProfilePage.css"

function ProfilePage() {
  return (
    <>
    <ProfileCardInfo />
    <Link to="/event/new/">NEW EVENT</Link>
    </>
  )
}

export default ProfilePage