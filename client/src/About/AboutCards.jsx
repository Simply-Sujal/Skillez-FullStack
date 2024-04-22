import React from 'react'
import WorkShowCardAbout from '../components/WorkShowCardAbout'
import { Fade } from 'react-reveal';

const AboutCards = () => {
    return (
        <section className='bg-[#eef5ff] dark:text-white duration-300 w-full text-center'>
            <div className="w-full dark:bg-slate-900 mx-auto pt-5">
                <Fade duration={1000} distance="30px" bottom>
                    <div className='max-w-[1290px] mx-auto'>
                        <h1 className='dark:text-white text-center text-3xl md:text-5xl font-bold text-gray-500 font-karla'>We Help You In <span className='text-blue-500 font-karla'>Multiple Ways</span></h1>
                        <div className='grid grid-cols-1 md:grid-cols-4 pt-4 md:pt-10 gap-5 pb-2 md:pb-5 px-2 md:px-1'>
                            <WorkShowCardAbout
                                workImage="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                actualWork="Project Building"
                            />
                            <WorkShowCardAbout
                                workImage="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                actualWork="Resume Building"
                            />
                            <WorkShowCardAbout
                                workImage="https://images.unsplash.com/photo-1552960562-daf630e9278b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                actualWork="Resume Review"
                            />
                            <WorkShowCardAbout
                                workImage="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                actualWork="Mock Interview"
                            />
                        </div>
                    </div>
                </Fade>
            </div>
        </section >
    )
}

export default AboutCards
