import React from 'react'
import { Link } from 'react-router-dom'

import useUser from '../../hooks/userUser'
import "./ProfileInfoCard.css"

function ProfileCardInfo() {

  const { user } = useUser()

  let card = user ? (
    <h2>{user.first_name}</h2>
  ) : (
  <>
  <h2>Hello</h2>
  </>
  )

  return (
    <>
    {card}
    <Link to="/event/new/">NEW EVENT</Link>
    </>
  )
}

export default ProfileCardInfo