import React from 'react';

const EventLanding = () => {
    return (
        <div className='relative h-[400px] md:h-[600px] pt-20 duration-300'>
            <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                <div className='max-w-[1290px] mx-auto flex justify-center h-full flex-col'>
                    <h1 className='w-full md:w-[60%] text-left text-3xl md:text-5xl text-white font-monts font-bold p-1'>Discover the best upcoming global events here!</h1>
                    <p className='w-full md:w-[65%] text-left text-[15px] md:text-[20px] md:text-1xl text-white font-monts pt-2 font-medium pl-1'>Unlock your engineering career potential with our platform, offering a diverse array of internship and full-time job listings. From internships to full-time positions.</p>
                </div>
            </div>
        </div>
    );
};

export default EventLanding;
