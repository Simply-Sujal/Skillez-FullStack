import React from 'react'

const WorkShowCardAbout = ({ workImage, actualWork }) => {
    return (
        <div className='border border-gray-700 relative group'>
            <img src={workImage} alt="" className='w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80' />
            <h1 className='text-gray-200 text-3xl px-1 font-bold absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                {actualWork}
            </h1>
        </div>
    )
}

export default WorkShowCardAbout
