import React from 'react'

import "./EventCard.css"

function EventCard(props) {
  return (
    <div className='event-card-container'>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default EventCard