import React, { useEffect, useState } from 'react'
import { getEvents } from "../../utils/eventService"

import EventCard from '../../components/EventCard/EventCard'
import "./HomePage.css"

function HomePage() {
  const [events, setEvents] = useState(null)
  useEffect(() => {
    async function getAllEvents() {
      const events = await getEvents()
      const eventsReversed = events.reverse()
      setEvents(eventsReversed)
    }
    getAllEvents();
  }, [])

  return (
    <div className='homepage-container'>
      {events &&
        events.map((event) => {
          return <EventCard 
                  key={event.id} 
                  eventID={event.id}
                  name={event.name} 
                  description={event.description}
                  date={event.date}
                  />
        })
      }
    </div>
  )
}

export default HomePage
