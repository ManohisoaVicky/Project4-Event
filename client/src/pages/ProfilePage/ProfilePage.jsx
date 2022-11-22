import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { myUserProfile } from '../../utils/userService'
import { getUserEvent } from '../../utils/eventService'

import EventCard from "../../components/EventCard/EventCard"
import ProfileCardInfo from "../../components/ProfileInfoCard/ProfileCardInfo"
import "./ProfilePage.css"

function ProfilePage() {

  const [user, setUser] = useState()
  const [events, setEvents] = useState()

  const userID = useParams().userID

  useEffect(() => {
    async function getUserInfoAndEvents() {
      const user = await myUserProfile(userID)
      setUser(user)
      const events = await getUserEvent(userID)
      setEvents(events)
    }
    getUserInfoAndEvents()
  }, [userID])

  return (
    <>
    <ProfileCardInfo user={user} />
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
  )
}

export default ProfilePage