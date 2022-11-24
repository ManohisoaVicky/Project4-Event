import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { myUserProfile } from '../../utils/userService'
import { getUserEvent } from '../../utils/eventService'
import useUser from "../../hooks/userUser"

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import EventCard from "../../components/EventCard/EventCard"
import ProfileCardInfo from "../../components/ProfileInfoCard/ProfileCardInfo"
import "./ProfilePage.css"

function ProfilePage() {

  const { user } = useUser()

  const [currentUser, setCurrentUser] = useState()
  const [events, setEvents] = useState()

  const userID = useParams().userID

  useEffect(() => {
    async function getUserInfoAndEvents() {
      const theUser = await myUserProfile(userID)
      setCurrentUser(theUser)
      const events = await getUserEvent(userID)
      setEvents(events)
    }
    getUserInfoAndEvents()
  }, [userID])

  return (
    <>
    { currentUser ?
    <>
    <ProfileCardInfo user={currentUser} />
    <div className='user-events-container'>
      <h2>My Events</h2>
      {
        events &&
        events.length !== 0 ? (
        events.map((event) => {
          return <EventCard 
                  key={event.id} 
                  eventID={event.id}
                  name={event.name} 
                  description={event.description}
                  date={event.date}
                  />
        }))
      :
      <p>You Have No Events</p>
      }
    </div>
    </>
    : <ErrorMessage error="authorization-error" text="YOU ARE NOT LOGGED IN"/>}
    </>
  )
}

export default ProfilePage