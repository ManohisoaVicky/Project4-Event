import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import isMatch from 'date-fns/isMatch'
import { getSingleEvent, updateEvent } from '../../utils/eventService'
import useUser from '../../hooks/userUser'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/FormElements/Button/Button'
import Input from '../../components/FormElements/Input/Input'
import "./UpdateEventPage.css"

function UpdateEventPage() {

  const [event, setEvent] = useState()

  const { user } = useUser()

  let nameIsValid, descriptionIsValid, dateIsValid, timeIsValid, durationIsValid = null

  let eventID = useParams().eventID

  let navigate = useNavigate()

  useEffect(() => {
    async function getEvent() {
      let res = await getSingleEvent(eventID)
      setEvent(res)
    }
    getEvent()
  }, [eventID])
  
  if (event) {
    nameIsValid = event.name.trim() !== "" && event.name.length > 50
    descriptionIsValid = event.description.trim() !== "" && event.description.length > 250
    dateIsValid = event.date.trim() !== "" && isMatch(event.date, "yyyy-MM-dd")
    timeIsValid = event.time.trim() 
    durationIsValid = event.duration.trim() !== ""
  }



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
          {!nameIsValid && <ErrorMessage error="input-validation-error" text="Please provide a valid event name."/>}
          <Input
          value={event.description}
          name="description"
          handleChange={handleChange}
          label="Description"
          />
          {!descriptionIsValid && <ErrorMessage error="input-validation-error" text="Please provide a valid event description."/> }
          <Input 
          type="date"
          value={event.date}
          name="date"
          handleChange={handleChange}
          label="Date"
          />
          {!dateIsValid && <ErrorMessage error="input-validation-error" text="Please provide a valid date." />}
          <Input 
          type="time"
          value={event.time}
          name="time"
          handleChange={handleChange}
          label="Time"
          />
          {!timeIsValid && <ErrorMessage error="input-validation-error" text="Please provide a valid time." />}
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
          {!durationIsValid && <ErrorMessage error="input-validation-error" text="Please provide a valid duration." />}
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

