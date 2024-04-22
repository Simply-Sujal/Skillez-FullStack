import React from 'react';
import { Fade } from 'react-reveal';
import WorkersEngineers from '../images/WorkersEngineers.jpg';
import { NavLink } from 'react-router-dom';

const WhatWeDo = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    }
    return (
        <section className='bg-[#EEF5FF] dark:bg-slate-900 dark:text-white duration-300 relative w-full py-16'>
            <div className='max-w-[1290px] mx-auto'>
                <h1 className='text-5xl font-karla text-center mb-8 font-bold'>What Actually We <span className='text-[#3182CE]'>Do </span>?</h1>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='flex flex-col md:flex-row rounded-lg overflow-hidden shadow-md'>
                        <div className='md:w-1/2 relative'>
                            <img src={WorkersEngineers} alt="Workers and Engineers" className='w-full h-auto rounded-md' />
                        </div>
                        <div className='md:w-1/2 bg-white dark:bg-slate-800 p-8 font-monts'>
                            <h1 className='text-4xl font-bold border-b-2 border-blue-500 pb-4'>Hola <span className='text-[#3182CE]'>Engineer's </span></h1>
                            <div className='mt-6'>
                                <h2 className='uppercase text-lg font-semibold mb-4'>We work for Engineering Students.</h2>
                                <p className='text-slate-900 dark:text-slate-200 mb-6 text-justify'>We are college students with a like-minded approach in our group. We love helping engineering students build their portfolios to secure high-paying jobs. Embark on a collaborative venture with us as we, college students, navigate the realm of engineering careers. Our mission is to assist fellow students in crafting portfolios that stand out in the competitive job market</p>
                                <div>
                                    <h1 className='text-2xl font-bold mb-4'>We help you in</h1>
                                    <div className='space-y-2'>
                                        <p>💻 Building Your Projects.</p>
                                        <p>📄 Building your Resume</p>
                                        <p>👀 Resume Review</p>
                                        <p>🚀 Mock Interviews</p>
                                        <p>💼 Internship Alert</p>
                                        <p>📅 Events Alert</p>
                                    </div>
                                </div>
                                <NavLink to='/about' onClick={handleClick}><p className='mt-4 text-blue-500 font-monts'>Click Me to know More ✋</p> </NavLink>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default WhatWeDo;
