import React, { useState } from 'react'
import isMatch from 'date-fns/isMatch'
import { useNavigate } from 'react-router-dom'
import { createEvent } from "../../utils/eventService"
import useUser from "../../hooks/userUser"

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/FormElements/Button/Button'
import Input from '../../components/FormElements/Input/Input'
import "./NewEventPage.css"

function NewEventPage() {

  const { user } = useUser()

  let navigate = useNavigate()

  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    duration: ""
  })

  const [nameTouched, setNameTouched] = useState(false)
  const [descriptionTouched, setDescriptionTouched] = useState(false)
  const [dateTouched, setDateTouched] = useState(false)
  const [timeTouched, setTimeTouched] = useState(false)
  const [durationTouched, setDurationTouched] = useState(false)

  const nameIsValid = event.name.trim() !== "" && event.name.length > 50
  const descriptionIsValid = event.description.trim() !== "" && event.description.length > 250
  const dateIsValid = event.date.trim() !== "" && isMatch(event.date, "yyyy-MM-dd")
  const timeIsValid = event.time.trim() !== "" && validateTime(event.time)
  const durationIsValid = event.duration.trim() !== ""

  const nameIsInvalid = nameTouched && !nameIsValid
  const descriptionIsInvalid = descriptionTouched && !descriptionIsValid
  const dateIsInvalid = dateTouched && !dateIsValid
  const timeIsInvalid = timeTouched && !timeIsValid
  const durationIsInvalid = durationTouched && !durationIsValid

  function validateTime (time) {
    const timeReg = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
    return time.match(timeReg)
  }

  const blurHandler = (e) => {
    if (e.target.name === "name") {
      setNameTouched(true)
    }
    if (e.target.name === "description") {
      setDescriptionTouched(true)
    }
    if (e.target.name === "date") {
      setDateTouched(true)
    }
    if (e.target.name === "time") {
      setTimeTouched(true)
    }
    if (e.target.name === "duration") {
      setDurationTouched(true)
    }
  }

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createEvent(event)
    navigate("/")
  }


  return (
    <div className='event-form-container'>
      {user ?
      <form onSubmit={handleSubmit} className="event-form" >
        <Input 
        type="text"
        value={event.name}
        name="name" 
        handleChange={handleChange} 
        label="Name"
        placeholder="Name" 
        blurHandler={blurHandler}
        />
        {nameIsInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid event name."/>}
        <Input
        value={event.description}
        name="description"
        handleChange={handleChange}
        blurHandler={blurHandler}
        label="Description"
        />
        {descriptionIsInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid event description."/> }
        <Input 
        type="date"
        value={event.date}
        name="date"
        handleChange={handleChange}
        blurHandler={blurHandler}
        label="Date"
        />
        {dateIsInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid date." /> }
        <Input 
        type="time"
        value={event.time}
        name="time"
        handleChange={handleChange}
        blurHandler={blurHandler}
        label="Time"
        />
        {timeIsInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid time." /> }
        <Input 
        type="text"
        value={event.duration}
        name="duration"
        handleChange={handleChange}
        blurHandler={blurHandler}
        label="Duration"
        defaultOption=""
        option1="30 mins"
        option2="45 mins"
        option3="60 mins"
        />
        {durationIsInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid duration." /> }
        <Button type="Submit" text="SUBMIT" />
      </form>
      : <ErrorMessage error="authorization-error" text="ONLY LOGGED IN USERS CAN CREATE EVENTS" />}
    </div>
  )
}

export default NewEventPage