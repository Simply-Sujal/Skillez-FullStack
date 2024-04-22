import React from 'react';
import { Fade } from 'react-reveal';


const JoinUs = () => {
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 dark:text-white duration-300 relative w-full text-center'>
            <Fade duration={1000} distance="30px" bottom>
                <div className="max-w-[1290px] mx-auto flex flex-col md:flex-row items-center justify-between px-2">
                    <div className="relative flex-grow md:w-1/2 text-center md:text-left pt-5 mx-auto">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-96 object-cover w-full rounded-sm' />
                        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Join a Team of Change Makers</h2>
                                <p className="text-lg text-center">
                                    Join a team of Engineers
                                </p>
                            </div>
                            <div className='px-2 md:px-44 mt-10 text-center'>
                                <a href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSex2EoUIlab0yD6V8u1uV66ZXXWF5frG4J-iSonRIYCaEMWsw/viewform?usp=send_form" target='_blank' class="relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-blue-200 rounded hover:bg-white group">
                                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-blue-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Our Team</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default JoinUs;
