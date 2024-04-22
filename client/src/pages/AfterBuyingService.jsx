import React from 'react'
import { Link } from 'react-router-dom'

const AfterBuyingService = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full h-screen'>
            <div className='flex justify-center flex-col items-center pt-[13%]'>
                <h1 className='text-center text-blue-500 font-karla text-6xl'>Thank You Taking The Service.</h1>
                <p className='text-center font-monts text-2xl dark:text-white text-black mt-3'>Our Team will reach out you very soon and will let you know the further process</p>

                <div className='text-center pt-10'>
                    <Link onClick={handleClick} to='/' class="relative inline-flex items-center justify-center p-4 px-9 md:px-14 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full dark:text-slate-100 text-slate-900 transition-all duration-300 transform group-hover:translate-x-full ease">Home 🏠</span>
                        <span class="relative invisible">Button Text</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AfterBuyingService
