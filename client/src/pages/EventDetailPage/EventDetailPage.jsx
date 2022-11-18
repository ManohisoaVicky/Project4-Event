import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleEvent } from '../../utils/eventService'

import EventDetailCard from '../../components/EventDetailCard/EventDetailCard'
import "./EventDetailPage.css"

function EventDetailPage() {

  const [event, setEvent] = useState()

  let eventID = useParams().eventID

  useEffect(() => {
    async function getEvent() {
      let res = await getSingleEvent(eventID)
      setEvent(res)
    }
    getEvent()
  }, [eventID])

  return (
    <div>
      { event &&
      <EventDetailCard name={event.name} description={event.description} date={event.date} time={event.time} duration={event.duration} />
      }
    </div>
  )
}

export default EventDetailPage