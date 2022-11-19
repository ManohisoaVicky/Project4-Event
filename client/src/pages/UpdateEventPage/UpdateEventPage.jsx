import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getUser } from '../../utils/userService'
import { getSingleEvent, updateEvent } from '../../utils/eventService'

import Button from '../../components/FormElements/Button/Button'
import Input from '../../components/FormElements/Input/Input'
import "./UpdateEventPage.css"

function UpdateEventPage() {

  const [event, setEvent] = useState()

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
    navigate("/")
  }

  return (
    <div>
      {
        event &&
        <form onSubmit={handleSubmit} >
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
      }
    </div>
  )
  
}

export default UpdateEventPage

