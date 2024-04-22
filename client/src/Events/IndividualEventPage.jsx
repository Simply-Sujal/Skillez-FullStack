import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GoOrganization } from 'react-icons/go';
import { IoEllipse } from 'react-icons/io5';

const IndividualEventPage = () => {
    const { eventName } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetchEventData();
    }, []);

    const fetchEventData = async () => {
        try {
            const response = await fetch('https://skill-ez-backend.vercel.app/api/events/news');
            const data = await response.json();
            const selectedEvent = data.find(event => event.Name.replace(/\s+/g, '-') === eventName);
            setEvent(selectedEvent);
        } catch (error) {
            console.error('Error fetching event data:', error);
        }
    };

    if (!event) return <div>Loading...</div>;

    return (
        <section className="bg-gray-100 dark:bg-gray-800 min-h-screen">
            <div className="container mx-auto pt-16 md:pt-28 pb-2 md:pb-10">
                <div className="max-w-5xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative">
                            <img src={event.EventImage} alt="Event" className="object-cover w-full h-full" />
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 py-2 px-4 text-white">
                                <h2 className="text-lg font-semibold">{event.Name}</h2>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                                <GoOrganization className="mr-2 text-xl" />
                                <span className="text-2xl font-semibold">{event.OrganisedBy}</span>
                            </div>
                            <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                                <IoEllipse className="mr-2 text-[14px] md:text-xl text-blue-500" />
                                <span className="text-sm md:text-[17px] font-semibold">{event.EventType}</span>
                            </div>
                            <div className="mb-4 text-gray-700 dark:text-gray-300 text-[16px]">
                                <p>Posted On: {event.AnnoucementDate}</p>
                                <p>Last Registration: {event.EndDate}</p>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 pb-4 text-[19px]">{event.EventDescription}</p>

                            <Link to={event.ApplyUrl} class="relative inline-flex items-center justify-center p-4 px-9 md:px-10 py-2 md:py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-black dark:text-slate-100 transition-all duration-300 transform group-hover:translate-x-full ease">Apply Now</span>
                                <span class="relative invisible">Apply Now</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndividualEventPage;
