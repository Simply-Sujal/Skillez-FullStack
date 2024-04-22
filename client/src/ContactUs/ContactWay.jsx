import React from 'react'

const ContactWay = ({ contactimage, contactTitle, contactInfo1, contactInfo2 }) => {
    return (
        <div className='w-[300px] md:w-[270px] dark:bg-slate-700 bg-[#eef5ff] flex flex-col items-center rounded-xl py-2 shadow-xl'>
            <img src={contactimage} alt="" className='w-14 m-4' />
            <h1 className='text-center text-slate-800 dark:text-white font-bold font-monts pb-2 tracking-wider'>{contactTitle}</h1>
            <p className='text-center text-slate-800 dark:text-white font-medium font-monts tracking-wider'>{contactInfo1}</p>
            <p className='text-center text-slate-800 dark:text-white font-medium font-monts pb-2 tracking-wider'>{contactInfo2}</p>
        </div>
    )
}

export default ContactWay
