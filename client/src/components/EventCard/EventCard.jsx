import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

import "./EventCard.css"

function EventCard(props) {

  let formattedDate = format(new Date(props.date), 'MMMM dd, yyyy')

  return (
    <Link to={`/event/detail/:${props.eventID}`}>
      <div className='event-card-container'>
        <h3>{props.name}</h3>
        <p>{formattedDate}</p>
      </div>
    </Link>
  )
}

export default EventCard