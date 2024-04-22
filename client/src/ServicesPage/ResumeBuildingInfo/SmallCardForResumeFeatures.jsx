import React from 'react'

const SmallCardForResumeFeatures = ({ iconImage, title }) => {
    return (
        <div className=''>
            <div className='bg-slate-100 shadow-lg mx-auto flex flex-col gap-2'>
                <div className='pt-2'>
                    <img src={iconImage} alt="IconImage" className='w-14 h-14 mx-auto' />
                </div>
                <div className='pb-2 pt-2'>
                    <h1 className='text-2xl font-monts text-center'>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default SmallCardForResumeFeatures
