import React, { useEffect, useState } from 'react'
import { getEvents } from "../../utils/eventService"

import Input from '../../components/FormElements/Input/Input'
import EventCard from '../../components/EventCard/EventCard'
import "./HomePage.css"

function HomePage() {
  const [events, setEvents] = useState()
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function getAllEvents() {
      const events = await getEvents(search)
      setEvents(events)
    }
    getAllEvents();
  }, [search])

  // const handleChange = (e) => {
  //   setSearch((oldState) => ({
  //     ...oldState,
  //     [e.target.name]: e.target.value
  //   }));
  // }

  const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)
  }

  return (
    <div className='homepage-container'>
      <Input
      type="text"
      name="search"
      value={search}
      handleChange={handleChange}
      placeholder="Placeholder"
      />
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
