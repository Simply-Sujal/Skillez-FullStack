import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom'

const JoinUs = () => {
    const handleLinkedInClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <section className='w-full bg-[#EEF5FF] dark:bg-slate-900 min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8'>
            <Fade duration={1000} distance="30px" bottom>
                <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between w-full gap-16 pt-5 md:pt-8'>
                    <div className='lg:w-1/2 mb-5 lg:mb-0'>
                        <img
                            className='w-full h-auto object-cover rounded-lg'
                            src='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'
                            alt='Web Development'
                        />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 text-black dark:text-white font-karla'>Together, We Can Create Miracles!</h1>
                        <p className='text-black dark:text-white mt-4 font-monts'>
                            Embrace the power of collaboration and innovation. Join our platform to unlock new opportunities and create miracles together. Your journey towards success begins here.
                        </p>
                        <p className='text-black dark:text-white mt-4 font-monts'>
                            Connect with a global community of talented freelancers and clients. Expand your professional network and learn from diverse perspectives.
                        </p>
                        <p className='text-black dark:text-white mt-4 font-monts'>
                            Join us to explore more!
                        </p>
                        <div className='mx-auto mt-9'>
                            <Link to='/service' onClick={handleLinkedInClick} class="relative inline-flex items-center justify-center p-4 px-9 md:px-14 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-black dark:text-slate-100 transition-all duration-300 transform group-hover:translate-x-full ease">Services</span>
                                <span class="relative invisible">Button Text</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default JoinUs;
