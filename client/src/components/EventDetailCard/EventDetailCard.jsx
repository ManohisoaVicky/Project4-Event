import React from 'react'
import { format } from 'date-fns'

function EventDetailCard(props) {

  let formattedDate = format(new Date(props.date), 'MMMM dd, yyyy')

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.description}</p>
      <p>{formattedDate}</p>
      <p>{props.duration}</p>
    </div>
  )
}

export default EventDetailCard