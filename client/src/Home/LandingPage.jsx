import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-reveal';
import GroupCoder from '../images/GroupCoding.png';
import BluePattern from '../images/blue-pattern.png';
import Typewriter from 'typewriter-effect';
import './styles.css';

const LandingPage = () => {
    const handleLinkedInClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <main className='min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800  dark:text-white duration-300 relative pt-16'>
            {/* <img src={BluePattern} alt="" className="absolute inset-0 w-auto md:w-full h-[100%] object-cover md:object-fill z-0" /> */}
            <section className='section-hero max-w-[1290px] mx-auto relative pt-3 md:pt-1'>
                <div className='flex flex-col md:flex-row justify-evenly items-center pt-2 md:pt-10 relative'>

                    {/* Left Section */}
                    <Slide left>
                        <div className='w-full md:w-[60%] text-center md:text-left md:pr-8'>
                            {/* <p className='text-md font-monts text-start px-2'>We are the best IT company for engineering students.</p> */}
                            <h1 className='text-4xl md:text-7xl font-semibold font-montserrat mt-1 text-start px-2'>Elevate Your Portfolio to the Top 1%</h1>
                            {/* <p className='text-sm md:text-lg font-monts font-normal text-start mt-3 md:mt-6 px-2'>
                                We Provide services and make you feel good.
                            </p> */}

                            <p className='flex text-2xl md:text-3xl gap-2 items-baseline px-2 pt-2 md:pt-7'>We help you in
                                <h1 className='text-blue-500 text-2xl md:text-5xl'>
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString('')
                                                .callFunction(() => {
                                                    // console.log('String typed out!');
                                                })
                                                .pauseFor(0)
                                                .deleteAll()
                                                .callFunction(() => {
                                                    // console.log('All strings were deleted');
                                                })
                                                .start();
                                        }}
                                        options={{
                                            strings: ['Best Services', 'Finding Internship', 'Finding Events', 'Skill Enhancement', 'Career Growth'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>

                            </p>

                            <div className='pt-4 md:pt-10 text-start px-2 flex gap-6 md:justify-start justify-center'>
                                <Link to='/service' onClick={handleLinkedInClick} class="relative inline-flex items-center justify-center p-4 px-9 md:px-14 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="text-[18px] md:text-[22px] absolute flex items-center justify-center w-full h-full text-black dark:text-slate-100 transition-all duration-300 transform group-hover:translate-x-full ease">Services</span>
                                    <span class="relative invisible">Button Text</span>
                                </Link>

                                <Link to="/internship" onClick={handleLinkedInClick} class="relative inline-flex items-center justify-center p-4 px-8 md:px-12 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="text-[18px] md:text-[22px] absolute flex items-center justify-center w-full h-full text-black dark:text-slate-100 transition-all duration-300 transform group-hover:translate-x-full ease">Internships</span>
                                    <span class="relative invisible">Button Text</span>
                                </Link>
                            </div>
                        </div>
                    </Slide>

                    {/* Right Section */}
                    <Slide right>
                        <div className='w-full md:w-[40%] mt-8 md:mt-0'>
                            <img
                                src={GroupCoder}
                                alt='coding group'
                                className='w-full h-full mx-auto md:mx-0'
                            />
                        </div>
                    </Slide>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;
