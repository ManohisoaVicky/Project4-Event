import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleEvent, updateEvent } from '../../utils/eventService'
import useUser from '../../hooks/userUser'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/FormElements/Button/Button'
import Input from '../../components/FormElements/Input/Input'
import "./UpdateEventPage.css"

function UpdateEventPage() {

  const [event, setEvent] = useState()

  const { user } = useUser()

  let eventID = useParams().eventID

  let navigate = useNavigate()

  useEffect(() => {
    async function getEvent() {
      let res = await getSingleEvent(eventID)
      setEvent(res)
    }
    getEvent()
  }, [eventID])

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateEvent(event, eventID)
    navigate(`/event/detail/${eventID}`)
  }

  return (
    <div className='event-form-container'>
      { user ?
        event ?
        user.id === event.host ?
        <form onSubmit={handleSubmit} className="event-form" >
          <Input 
          type="text"
          value={event.name}
          name="name" 
          handleChange={handleChange} 
          label="Name"
          placeholder="Name" 
          />
          <Input
          value={event.description}
          name="description"
          handleChange={handleChange}
          label="Description"
          />
          <Input 
          type="date"
          value={event.date}
          name="date"
          handleChange={handleChange}
          label="Date"
          />
          <Input 
          type="time"
          value={event.time}
          name="time"
          handleChange={handleChange}
          label="Time"
          />
          <Input 
          type="text"
          value={event.duration}
          name="duration"
          handleChange={handleChange}
          label="Duration"
          defaultOption=""
          option1="30 mins"
          option2="45 mins"
          option3="60 mins"
          />
          <Button type="SUBMIT" text="SUBMIT"/>
        </form> 
        : <ErrorMessage error="authorization-error" text="UNAUTHORIZED ACTION" />
        : <ErrorMessage error="authorization-error" text="EVENT DOES NOT EXIST" />
        : <ErrorMessage error="authorization-error" text="YOU ARE NOT LOGGED IN" />
      }
    </div>
  )
  
}

export default UpdateEventPage

