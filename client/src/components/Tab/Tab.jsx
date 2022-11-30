import React, { useState } from 'react'

import EventCard from '../EventCard/EventCard'
import "./Tab.css"

function Tab(props) {

    const [active, setActive] = useState(1)
    const handleClick = (element) => setActive(element)
    const checkActive = (element, className) => active === element ? className : "";

  return (
    <div className='main-tab-container'>
    <div className='tabs-container'>
    <div className="tabs">
        <button
            className={`tab ${checkActive(1, "active")}`}
            onClick={() => handleClick(1)}
        >
        MY EVENTS
        </button>
        <button
            className={`tab ${checkActive(2, "active")}`}
            onClick={() => handleClick(2)}
        >
        JOINED EVENTS
        </button>
    </div> 
    <div className="panels-container">
        <div className={`panel ${checkActive(1, "active")}`}>
            {
            props.events ?
            props.events.length !== 0 ? 
            props.events.map((event) => {
                return <EventCard 
                        key={event.id} 
                        eventID={event.id}
                        name={event.name} 
                        description={event.description}
                        date={event.date}
                        />
              })
            : <p>YOU HAVE NO EVENTS</p>
            : <></>
            }
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
            <p>Nulla lobortis quis massa quis lobortis. Nullam porta semper lorem, vel efficitur augue rutrum quis. Suspendisse potenti.</p>
        </div>
        <div className={`panel ${checkActive(3, "active")}`}>
            <p>Cras porta consectetur dolor porttitor fringilla. Cras vitae urna ac erat fermentum egestas. Donec egestas cursus scelerisque.</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Tab