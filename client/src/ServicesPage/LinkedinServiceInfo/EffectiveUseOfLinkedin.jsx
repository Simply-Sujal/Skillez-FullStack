import React from 'react';
import { Fade } from 'react-reveal';

const EffectiveUseOfLinkedin = () => {
    const pointsForLinkedin = [
        {
            id: 1,
            topic: "Optimise your LinkedIn profile"
        },
        {
            id: 2,
            topic: "Build and expand your network"
        },
        {
            id: 3,
            topic: "Follow companies of interest"
        },
        {
            id: 4,
            topic: "Utilise the LinkedIn job search feature"
        },
        {
            id: 5,
            topic: "Use LinkedIn's 'Easy Apply' feature"
        },
        {
            id: 6,
            topic: "Monitor your profile visibility"
        },
        {
            id: 7,
            topic: "Utilise the Alumni tool"
        },
        {
            id: 8,
            topic: "Be consistent and active"
        },
        {
            id: 9,
            topic: "Leverage LinkedIn's 'Open to Work' feature"
        },
        {
            id: 10,
            topic: "Follow recruiters and HR professionals"
        }
    ];

    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-4 md:py-6'>
            <div className='max-w-[1290px] mx-auto px-4'>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        {pointsForLinkedin.map((point) => (
                            <div key={point.id} className='bg-white dark:bg-gray-800 p-4 rounded-md shadow-md transform transition duration-300 hover:scale-105'>
                                <p className='text-lg dark:text-violet-500 text-violet-500'>✔ {point.topic}</p>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default EffectiveUseOfLinkedin;
