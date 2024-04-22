import React from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const AboutLanding = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    }
    const { user } = useAuth();

    return (

        <section className='bg-[#eef5ff] dark:bg-slate-900 md:h-screen h-[1300px] realtive dark:text-white duration-300 w-full text-center '>

            <div className="max-w-[1290px] mx-auto flex flex-col md:flex-row bg-[#eef5ff] dark:bg-slate-900 duration-300 items-center justify-between px-2 pt-20">
                <Fade duration={1000} distance="30px" bottom>
                    <div className='text-start w-full md:w-[60%]'>
                        <h1 className="text-[14px] md:text-[17px] font-bold text-start mb-4 flex gap-1">
                            ~ Welcome,
                            {user ? (
                                <span className="text-blue-500 dark:text-blue-500 flex gap-1  duration-300">
                                    {` ${user.username}`} <p> to SkillEz.</p>
                                </span>
                            ) : (
                                <span className="text-blue-500 dark:text-blue-500 duration-300">
                                    to our website
                                </span>
                            )}
                        </h1>
                        <h2 className='text-2xl md:text-5xl text-blue-500 font-montserrat font-extrabold mt-1 md:mt-4'>
                            We Help You Get Solutions
                        </h2>
                        <p className="text-black text-[16px] md:text-[17px] dark:text-gray-300 mb-4 mt-2 md:mt-6 text-start md:text-justify font-monts  duration-300">
                            As engineers, we serve people in many ways by offering exceptional quality services. Improve Their Resume, Make a Statement, Rank in the Top 1%, and Land Their Ideal Job. In addition to building things for you, SkillEz also gives you advice on how to excel in your field and in a very controlled manner.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 md:mt-8'>
                            <div className='flex flex-row text-left gap-2'>
                                <img src="https://static-00.iconduck.com/assets.00/rocket-emoji-2048x2048-sykv2c0e.png" alt="" className='w-16 h-16 object-cover mb-2 pt-1' />
                                <div className=''>
                                    <h1 className='font-bold font-karla'>Project Building</h1>
                                    <p className='text-gray-700 dark:text-gray-300 text-[13px] duration-300 hidden md:block'>Empowering your vision with seamless project building.</p>
                                </div>
                            </div>
                            <div className='flex text-left gap-2'>
                                <img src="https://static-00.iconduck.com/assets.00/rocket-emoji-2048x2048-sykv2c0e.png" alt="" className='w-16 h-16 object-cover mb-2' />
                                <div className=''>
                                    <h1 className='font-bold font-karla'>Resume Review</h1>
                                    <p className='text-gray-700 dark:text-gray-300 text-[13px] duration-300 hidden md:block'>Help get you know your resume level easily by us.</p>
                                </div>
                            </div>
                            <div className='flex text-left gap-2'>
                                <img src="https://static-00.iconduck.com/assets.00/rocket-emoji-2048x2048-sykv2c0e.png" alt="" className='w-16 h-16 object-cover mb-2' />
                                <div className=''>
                                    <h1 className='font-bold font-karla'>Mock Interview</h1>
                                    <p className='text-gray-700 dark:text-gray-300 text-[13px] duration-300 hidden md:block'>Increase your self-assurance and get motivated</p>
                                </div>
                            </div>
                        </div>


                        <div className='mt-2 md:mt-10 '>
                            <Link to='/service' onClick={handleClick} class="relative inline-flex items-center justify-center p-4 px-9 md:px-14 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full dark:text-slate-100 text-slate-900 transition-all duration-300 transform group-hover:translate-x-full ease">Services</span>
                                <span class="relative invisible">Button Text</span>
                            </Link>
                        </div>
                    </div>

                    <div className='w-full md:w-[30%] mt-8 md:mt-0 relative pt-1 md:pt-10'>
                        <img src="https://images.unsplash.com/photo-1611175697352-c8a3d5719783?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-[30rem] rounded-md mb-4' />
                        <div className='absolute bottom-[-15%] left-5 w-[90%] h-[180px] bg-white p-6 rounded-md'>
                            <p className='text-blue-500 font-bold text-2xl font-karla text-md'>SkillEz</p>
                            <h1 className='text-gray-700 pt-2 text-2xl font-bold'>Looking For Help?</h1>
                            <p className='pt-2 text-gray-700 dark:text-gray-700'>We Ecourage You To Just Follow The Four Steps And Get The Benefits Of Multiple Services.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default AboutLanding;
