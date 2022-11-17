import React, { useEffect, useState } from 'react'
import { getEvents } from "../../utils/eventService"

import "./HomePage.css"

function HomePage() {
  const [events, setEvents] = useState(null)
  useEffect(() => {
    async function getAllEvents() {
      const events = await getEvents()
      setEvents(events)
      console.log(events)
    }
    getAllEvents();
  }, [])

  return (
    <div className='homepage-container'>
      homepage
    </div>
  )
}

export default HomePage
