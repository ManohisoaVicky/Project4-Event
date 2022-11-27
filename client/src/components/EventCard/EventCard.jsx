import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

import "./EventCard.css"

function EventCard(props) {

  let formattedDate = format(new Date(props.date), 'MMMM dd, yyyy')

  return (
    <div className='event-card-container'>
      <Link to={`/event/detail/${props.eventID}`}>
        <div>
          <h3>{props.name}</h3>
          <p>{formattedDate}</p>
        </div>
    </Link>
    </div>
  )
}

export default EventCard