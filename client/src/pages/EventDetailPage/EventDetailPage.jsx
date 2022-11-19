import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleEvent, deleteEvent } from '../../utils/eventService'
import { getUser } from '../../utils/userService'

import Button from '../../components/FormElements/Button/Button'
import EventDetailCard from '../../components/EventDetailCard/EventDetailCard'
import "./EventDetailPage.css"

function EventDetailPage() {

  const [event, setEvent] = useState()

  let user = getUser()

  let eventID = useParams().eventID

  useEffect(() => {
    async function getEvent() {
      let res = await getSingleEvent(eventID)
      setEvent(res)
    }
    getEvent()
  }, [eventID])

  const handleDelete = (e) => {
    deleteEvent(eventID)
  }

  return (
    <div>
      { event &&
        <EventDetailCard name={event.name} description={event.description} date={event.date} time={event.time} duration={event.duration} />
      }
      {
        (event && event.host === user.id) &&
        <Button text="DELETE" handleDelete={handleDelete} />
      }
    </div>
  )
}

export default EventDetailPage