import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import isMatch from 'date-fns/isMatch'
import { getSingleEvent, updateEvent } from '../../utils/eventService'
import useUser from '../../hooks/userUser'
import { isEmpty, minLength } from '../../utils/validations'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/FormElements/Button/Button'
import Input from '../../components/FormElements/Input/Input'
import "./UpdateEventPage.css"

function UpdateEventPage() {

  const [event, setEvent] = useState()

  const [state, setState] = useState()

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
    setState(event)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventID])
  
  if (event) {
    nameIsValid = isEmpty(event.name) && minLength(event.name, 40)
    descriptionIsValid = isEmpty(event.description) && minLength(event.description, 250)
    dateIsValid = isEmpty(event.date) && isMatch(event.date, "yyyy-MM-dd")
    timeIsValid = isEmpty(event.time)
    durationIsValid = isEmpty(event.duration)
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

  const clickHandler = () => {
    setEvent(state)
    navigate(-1)
  }

  const formIsInvalid = !(nameIsValid && descriptionIsValid && dateIsValid && timeIsValid && durationIsValid)

  return (
    <div className='update-event-form-container'>
      { user ?
        event ?
        user.id === event.host.id ?
        <form onSubmit={handleSubmit} className="update-event-form" >
          <Input 
          type="text"
          value={event.name}
          name="name" 
          handleChange={handleChange} 
          placeholder="Name" 
          />
          {!nameIsValid && <ErrorMessage error="input-validation-error" text="Please provide a valid event name."/>}
          <Input
          value={event.description}
          name="description"
          handleChange={handleChange}
          rows={5}
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
          <div className='update-event-btn-container'>
            <Button type="SUBMIT" text="SUBMIT" isDisabled={formIsInvalid} />
            <Button text="CANCEL" clickHandler={clickHandler} />
          </div>
        </form> 
        : <ErrorMessage error="authorization-error" text="UNAUTHORIZED ACTION" />
        : <ErrorMessage error="authorization-error" text="EVENT DOES NOT EXIST" />
        : <ErrorMessage error="authorization-error" text="YOU ARE NOT LOGGED IN" />
      }
    </div>
  )
  
}

export default UpdateEventPage

