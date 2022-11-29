import React from 'react'
import { Link } from 'react-router-dom'

import "./AboutHost.css"

function AboutHost(props) {
  return (
    <div className='about-host-container'>
        <h3>About the host</h3>
        <Link to={`/profile/${props.host.id}`} className='about-host-name'>{props.host.first_name} {props.host.last_name}</Link>
        {props.host.bio && (
            <div className='about-host-bio-container'>
                <p>{props.host.bio}</p>
            </div>
        )}
    </div>
  )
}

export default AboutHost