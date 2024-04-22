import React from 'react';
import { Fade } from 'react-reveal';

const OurSuperiorService = () => {
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 dark:text-white duration-300 w-full '>
            <Fade duration={1000} distance="30px" bottom>
                <div className='max-w-[1290px] mx-auto'>
                    <h1 className='text-3xl md:text-5xl font-bold font-monts text-center pt-8'>Our Epic <span className='text-blue-500'>Services</span></h1>
                    <p className='text-center text-[16px] md:text-1xl pt-2 px-2'>Opt Any One Of The Best Service And Stand Out Among 1%</p>
                </div>
            </Fade>
        </section>
    )
}

export default OurSuperiorService
