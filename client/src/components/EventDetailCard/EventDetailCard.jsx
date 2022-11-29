import React from 'react'
import { format } from 'date-fns'

import AboutHost from '../AboutHost/AboutHost'
import Button from '../FormElements/Button/Button'
import "./EventDetailCard.css"

function EventDetailCard(props) {

  let formattedDate = format(new Date(props.date), 'MMMM dd, yyyy')

  let formattedTime = props.time.replace(/(:\d{2}| [AP]M)$/, "")

  return (
    <div className='event-detail-container'>
      <div className='event-details'>
        <div className='event-detail-name'>
          <h2>{props.name}</h2>
        </div>
        <div className='about-event-container'>
          <h3>About the event</h3>
          <p>{props.description}</p>
          <p><span className='event-info'>Date:</span> {formattedDate}</p>
          <p><span className='event-info'>Time:</span> {formattedTime}</p>
          <p><span className='event-info'>Duration:</span> {props.duration}</p>
        </div>
        {(props.event && props.user && props.event.host.id === props.user.id) ? (
        <div className='event-detail-btn-container'>
          <Button text="UPDATE" toUpdatePage={props.toUpdatePage} />
          <Button text="DELETE" handleDelete={props.handleDelete} />
        </div>
        ): (props.event && props.user) && (
          <AboutHost host={props.event.host} />
        )}
      </div>
    </div>
  )
}

export default EventDetailCard