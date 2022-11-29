import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

import "./EventCard.css"

function EventCard(props) {

  const navigate = useNavigate()

  let formattedDate = format(new Date(props.date), 'MMMM dd, yyyy')

  return (
    <div className='event-card-container'>
      <Link to={`/event/detail/${props.eventID}`}>
        <div>
          <h3>{props.name}</h3>
          <div className='event-card-info'>
            <p>{formattedDate}</p>
            {props.host && <p>Host: <span className='event-card-host' onClick={(e) => {e.preventDefault(); navigate(`/profile/${props.host.id}`)}}>{props.host.first_name} {props.host.last_name}</span></p>}
          </div>
        </div>
    </Link>
    </div>
  )
}

export default EventCard