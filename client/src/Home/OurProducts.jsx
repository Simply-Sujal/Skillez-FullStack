import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import ImagesNotesync from './ImagesNotesync.png';
import ecoomerce from './ecoomerce.png';


const OurProducts = () => {
    return (
        <section className='bg-blue-100 dark:bg-slate-900 dark:text-white duration-300 relative w-full py-5 md:py-16'>
            <div className='max-w-[1290px] mx-auto'>
                <h1 className='text-3xl md:text-5xl text-center mb-2 font-karla font-bold'>Our Latest <span className='text-[#3182CE]'>Projects </span></h1>
                <p className='text-center text-[17px] md:text-[1.5rem]'>We believe in building impactful projects.</p>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='flex flex-col md:flex-row justify-center items-center md:items-start pt-8 md:pt-16'>
                        <div className='md:mr-8 mb-6 md:mb-0 text-center md:text-left'>
                            <p className='text-blue-700 dark:text-blue-400 font-semibold text-2xl mb-2'>Our Products</p>
                            <p className='text-[15px] md:text-3xl font-bold font-karla'>Latest Projects From Our Team</p>

                            <div className='flex justify-center md:justify-start items-center text-[18px] pt-5 gap-2'>
                                <Link><FaArrowRight /></Link>
                                <Link to="http://notesync.in"><p className='pl-0 md:pl-2'>Web App</p></Link>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 px-2'>
                            <div className='w-full md:w-1/2'>
                                <div className='dark:bg-gray-800 bg-white shadow-2xl overflow-hidden'>
                                    <a href="http://www.notesync.in" target='_blank'><h1 className='pl-12 text-xl dark:text-blue-400 text-blue-700  font-medium pt-8'>NoteSync</h1></a>
                                    <img src={ImagesNotesync} alt="E-Commerce" className='h-96 w-full object-cover px-9 pt-10 pb-10' />
                                </div>
                            </div>

                            <div className='w-full md:w-1/2'>
                                <div className='dark:bg-gray-800 bg-white shadow-lg overflow-hidden'>
                                    <a href="https://capable-douhua-bfcea1.netlify.app/" target='_blank'>
                                        <h1 className='pl-12 text-xl text-blue-700 dark:text-blue-400 font-medium pt-8'>Ecommerce</h1>
                                        <img src={ecoomerce} alt="E-Commerce" className='h-96 w-full object-cover px-9 pt-10 pb-10' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default OurProducts;
