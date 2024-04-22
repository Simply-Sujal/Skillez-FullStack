import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';


const FreeLinkedinService = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-lightblue-200 text-darkslate-900 w-full dark:bg-slate-900 bg-[#eef5ff] duration-300 md:pt-0 pt-0'>
            <div className='text-center p-8'>
                <h1 className='text-2xl md:text-6xl mb-6 text-blue-500 font-monts font-bold'>Welcome to Our Free LinkedIn Service!</h1>
                <p className='text-[22px] md:text-2xl mb-4 text-slate-900 dark:text-white'>This service is provided to you completely free of charge.</p>
                <p className='text-2xl mb-8 text-slate-900 dark:text-white'>Join our socials to stay updated:</p>
                <div className='flex justify-center space-x-7'>
                    <Link to="https://chat.whatsapp.com/GLnmg1f0JsPAZ5T6YCSzYo" target='_blank' className="text-[18px] flex items-center justify-center px-7 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                        <FaWhatsapp className="h-6 w-5 mr-2" />
                        Join Me
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FreeLinkedinService;
