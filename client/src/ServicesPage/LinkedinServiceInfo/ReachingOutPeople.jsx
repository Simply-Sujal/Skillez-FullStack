import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const ReachingOutPeople = () => {
    return (
        <div className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-4 md:py-6'>
            <section className='max-w-[1290px] mx-auto'>
                <div>
                    <h1 className='font-monts text-5xl text-violet-500 text-center pb-4 font-bold'>Contact For Any Query</h1>
                    <div className='flex md:flex-row flex-col justify-around gap-10 bg-slate-200 dark:bg-slate-800 py-10 rounded-md'>
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-[20px] md:text-[30px] font-karla text-violet-500 font-semibold'>Sujal Kr. Timilsina</p>
                            <p className=''>
                                <a href="https://www.linkedin.com/in/sujal-timilsina-a26299197/" target='_blank' class="text-blue-400 hover:text-blue-500 dark:hover:text-white">
                                    <FaLinkedin className='text-3xl' />
                                </a>
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-[20px] md:text-[30px] font-karla text-violet-500 font-semibold'>Piyush Kr. Singh</p>
                            <p className=''>
                                <a href="https://www.linkedin.com/in/piyush-kumar-singh-902036248/" target='_blank' class="text-blue-400 hover:text-blue-500 dark:hover:text-white">
                                    <FaLinkedin className='text-3xl' />
                                </a>
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-[20px] md:text-[30px] font-karla text-violet-500 font-semibold'>Tanisha Singh</p>
                            <p className=''>
                                <a href="https://www.linkedin.com/in/tanisha22/" target='_blank' class="text-blue-400 hover:text-blue-500 dark:hover:text-white">
                                    <FaLinkedin className='text-3xl' />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ReachingOutPeople
