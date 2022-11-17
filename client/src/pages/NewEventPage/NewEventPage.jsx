import React, { useState } from 'react'

import Input from '../../components/FormElements/Input/Input'
import { createEvent } from "../../utils/eventService"
import "./NewEventPage.css"

function NewEventPage() {

  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    duration: ""
  })

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createEvent(event)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default NewEventPage