import React from 'react'
import EventCard from './EventCard'
import eventData from '../../public/eventDetails'

const ListOfEvents = () => {
    return (
        <section className='w-full bg-[#EEF5FF] dark:bg-slate-900 duration-300'>
            <div className='max-w-[1190px] mx-auto'>
                <h1 className='text-5xl text-center text-blue-500 font-monts font-bold p-4'>Best Upcoming Events</h1>
                {/* <div className='pt-5 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                    {
                        eventData.map((item, index) => (
                            <div key={index} className=''>
                                <EventCard
                                    eventName={item.eventName}
                                    eventImage={item.eventImage}
                                    smallDescription={item.smallDescription}
                                    eventType={item.eventType}
                                    announcementDate={item.announcementDate}
                                    lastRegistrationDate={item.lastRegistrationDate}
                                    applyUrl={item.applyUrl}
                                    organization={item.organization}
                                />
                            </div>
                        ))
                    }
                </div> */}
            </div>
        </section>
    )
}

export default ListOfEvents