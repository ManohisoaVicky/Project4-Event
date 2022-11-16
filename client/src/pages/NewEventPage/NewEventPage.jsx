import React, { useState } from 'react'

import "../../components/FormElements/Input/Input"
import Input from '../../components/FormElements/Input/Input'
import "./NewEventPage.css"

function NewEventPage() {

  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: null,
    time: null,
    duration: ""
  })

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <form>
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
        placeholder="Duration"
        />
      </form>
    </div>
  )
}

export default NewEventPage