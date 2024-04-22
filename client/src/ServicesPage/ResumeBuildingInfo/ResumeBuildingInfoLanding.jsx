import React from 'react'
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';

const ResumeBuildingInfoLanding = () => {
    return (
        <div className='w-full h-[calc(100vh-5rem)]'>
            <div className="bg-cover bg-[url('https://images.unsplash.com/photo-1502465771179-51f3535da42c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat h-full w-full">
                <Fade duration={1000} distance="30px" bottom>
                    <div className="container mx-auto flex flex-col my-auto align-middle h-full max-w-[1290px]">
                        <div className='my-auto mx-auto lg:mx-0 w-10/12 lg:w-2/4'>
                            <h1 className="text-4xl md:text-7xl mb-4 text-white font-monts"><span className='text-blue-500'>Let’s talk</span> about Resume Building Service</h1>
                            <p className="text-2xl mb-8 text-white">Best resumes that showcase your skills and achievements to stand out in the competitive job market.</p>
                            <div className='flex items-center'>
                                <NavLink to="/resumebuildingform" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Buy Service</span>
                                    <span className="relative invisible">Button Text</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>

    )
}

export default ResumeBuildingInfoLanding
