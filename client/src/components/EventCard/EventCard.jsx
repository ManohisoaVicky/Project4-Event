import React from 'react'
import { format } from 'date-fns'

import "./EventCard.css"

function EventCard(props) {

  let formattedDate = format(new Date(props.date), 'MMMM dd, yyyy')

  return (
    <div className='event-card-container'>
      <h3>{props.name}</h3>
      <p>{formattedDate}</p>
    </div>
  )
}

export default EventCard