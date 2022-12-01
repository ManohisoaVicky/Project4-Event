import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { addParticipant } from '../../utils/eventService'
import { format } from 'date-fns'

import AboutHost from '../AboutHost/AboutHost'
import Button from '../FormElements/Button/Button'
import "./EventDetailCard.css"

function EventDetailCard(props) {

  const navigate = useNavigate()

  let formattedDate = format(new Date(props.date), 'MMMM dd, yyyy')

  let formattedTime = props.time.replace(/(:\d{2}| [AP]M)$/, "")

  const joinEvent = () => {
    addParticipant(props.id)
    navigate(`/profile/${props.user.id}`)

  }

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
        {(props.event && props.user && (props.event.host.id === props.user.id)) ? (
        <div className='event-detail-btn-container'>
          <Button text="UPDATE" toUpdatePage={props.toUpdatePage} />
          <Button text="DELETE" handleDelete={props.handleDelete} />
        </div>
        ): (props.event) && (
          <>
          <AboutHost host={props.event.host} />
          <div>{props.user && props.event ? <Button text="JOIN EVENT" clickHandler={joinEvent} >JOIN EVENT</Button>
              : props.event && !props.user && <p className='login-or-signup-message'><Link to="/login">LOG IN</Link> OR <Link to="/signup">SIGN UP</Link> TO JOIN EVENTS</p>  
        }</div>
          </>
        )}
      </div>
    </div>
  )
}

export default EventDetailCard