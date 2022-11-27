import React, { useEffect, useState } from 'react'
import { getEvents } from "../../utils/eventService"
import useDebounce from '../../hooks/useDebounce'

import Input from '../../components/FormElements/Input/Input'
import EventCard from '../../components/EventCard/EventCard'
import "./HomePage.css"

function HomePage() {
  const [events, setEvents] = useState()
  const [search, setSearch] = useState("")

  const debounce = useDebounce(search, 500)

  useEffect(() => {
    async function getAllEvents() {
      const events = await getEvents(search)
      setEvents(events)
    }
    getAllEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce])

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
      placeholder="Find events"
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
