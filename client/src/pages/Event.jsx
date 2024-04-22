import React from 'react'
import EventLanding from '../Events/EventLanding'
import EventCard from '../Events/EventCard'
import ListOfEvents from '../Events/ListOfEvents'
import Footer from '../components/Footer'

const Event = () => {
    return (
        <>
            <EventLanding />
            <ListOfEvents />
            <EventCard />
            <Footer />
        </>
    )
}

export default Event