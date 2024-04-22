import React from 'react'
import { TiTick } from "react-icons/ti";
import sampleVideo from './service.mp4'
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';


const LandingService = () => {
    const handleClick = () => {
        const towardsService = document.getElementById('service-card');
        if (towardsService) {
            towardsService.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full '>
                <Fade duration={1000} distance="30px" bottom>
                    <div className="max-w-[1320px] mx-auto items-center px-4 pt-20 md:pt-24 top-0 left-[25%]">
                        <h1 className='text-slate-900 dark:text-white text-3xl md:text-7xl font-bold font-monts sm:max-w-[450px] md:max-w-[800px] mx-auto text-center'>Elevate Your Portfolio to the <span className='text-blue-500'>Top 1%</span></h1>
                        <p className='text-center text-1xl pt-2 text-slate-900 dark:text-white'>One non-stop solution to solve all your portfolio problems</p>


                        <div className='pt-5 flex justify-center gap-5 sm:max-w-[450px] md:max-w-[700px] mx-auto'>
                            <Link onClick={handleClick} to='/service' class="relative inline-flex items-center justify-center p-4 px-7 md:px-14 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full dark:text-slate-100 text-slate-900 transition-all duration-300 transform group-hover:translate-x-full ease">Services</span>
                                <span class="relative invisible">Button Text</span>
                            </Link>

                            <Link to="/contact" class="relative inline-flex items-center justify-center p-4 px-7 md:px-14 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full dark:text-slate-100 text-slate-900 transition-all duration-300 transform group-hover:translate-x-full ease">Contact Us</span>
                                <span class="relative invisible">Button Text</span>
                            </Link>
                        </div>

                        <div className='pt-5 flex justify-center gap-5 sm:max-w-[450px] md:max-w-[700px] mx-auto'>
                            <h1 className='text-[12px] font-monts items-center flex dark:text-white text-slate-900'><TiTick className='text-[18px] mr-1' />
                                <span className='font-bold font-monts mr-1 dark:text-white text-slate-900'>Free Forever</span> for Basic features
                            </h1>
                            <h1 className='text-[12px] font-monts items-center flex dark:text-white text-slate-900'><TiTick className='text-[18px] mr-1' />
                                <span className='font-bold font-monts mr-1 dark:text-white text-slate-900'>Free Forever</span> for Basic features
                            </h1>
                        </div>

                        <video className="w-[720px] h-auto shadow-md mt-5 mx-auto" autoPlay loop muted playsInline>
                            <source src={sampleVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Fade>
            </section >
        </>
    )
}

export default LandingService