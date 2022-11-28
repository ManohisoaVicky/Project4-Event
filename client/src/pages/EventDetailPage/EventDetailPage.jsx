import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleEvent, deleteEvent } from '../../utils/eventService'
import { getUser } from '../../utils/userService'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/FormElements/Button/Button'
import EventDetailCard from '../../components/EventDetailCard/EventDetailCard'
import "./EventDetailPage.css"

function EventDetailPage() {

  const [event, setEvent] = useState()

  let user = getUser()

  let eventID = useParams().eventID

  let navigate = useNavigate()

  useEffect(() => {
    async function getEvent() {
      let res = await getSingleEvent(eventID)
      setEvent(res)
    }
    getEvent()
  }, [eventID])

  const handleDelete = (e) => {
    deleteEvent(eventID)
    navigate("/")
  }

  const toUpdatePage = (e) => {
    navigate(`/event/edit/${eventID}`)
  }

  return (
    <div className='event-detail-page-container'>
      { event ?
        <EventDetailCard 
        name={event.name} 
        description={event.description} 
        date={event.date} 
        time={event.time} 
        duration={event.duration} 
        event={event} 
        user={user}
        handleDelete={handleDelete}
        toUpdatePage={toUpdatePage}
        />
      : <ErrorMessage error="authorization-error" text="EVENT DOES NOT EXIST" />}
    </div>
  )
}

export default EventDetailPage