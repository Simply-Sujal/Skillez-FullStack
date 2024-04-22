import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoOrganization } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import Tilt from 'react-parallax-tilt';
import Infinity from '../assets/Infinity.gif';

const EventCard = () => {
    const [events, setEvents] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetchEventData();
    }, []);

    const fetchEventData = async () => {
        try {
            setLoader(false);
            const response = await fetch('https://skill-ez-backend.vercel.app/api/events/news');
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching event data:', error);
        } finally {
            setLoader(true); // Set loader to false regardless of success or failure
        }
    };

    const handleLinkedInClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        loader ? (
            <div className="flex flex-wrap justify-center gap-8 bg-[#EEF5FF] dark:bg-slate-900 duration-300 pb-6">
                {events.map(event => (
                    <div key={event._id}>
                        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <Tilt>
                                <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img src={event.EventImage} alt="card-image" />
                                </div>
                                <div className="p-5">
                                    <h5 className="block mb-2 font-monts text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {event.Name}
                                    </h5>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex items-center gap-1">
                                            <GoOrganization className="font-monts" />
                                            <h1 className="font-monts">{event.OrganisedBy}</h1>
                                        </div>
                                        <div className="flex items-center">
                                            <LuDot className="text-blue-500 text-[22px]" />
                                            <h1 className="font-monts">{event.EventType}</h1>
                                        </div>
                                    </div>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit pt-2">
                                        {event.EventSmallDescription}
                                    </p>
                                </div>
                                <div className="p-6 pt-0 flex justify-between items-center">
                                    <h1 className="font-medium">Posted On {event.AnnoucementDate}</h1>
                                    <Link
                                        to={`/event/${event.Name.replace(/\s+/g, "-")}`}
                                        onClick={handleLinkedInClick}
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                        type="button"
                                    >
                                        Apply
                                    </Link>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                )).reverse()}
            </div>
        ) : (
            <img src={Infinity} alt="loader" className=" mx-auto " style={{ backgroundColor: 'transparent' }} />

        )
    );
};

export default EventCard;
