import React from 'react';
import { Fade } from 'react-reveal';

const CompanyBasedProjects = () => {
    return (
        <section className='w-full bg-[#EEF5FF] dark:bg-slate-900'>
            <h1 className='text-3xl md:text-5xl font-karla text-center mb-2 font-bold pt-6 md:pt-10 dark:text-white text-black'>Leading <span className='text-blue-500'>Companies</span> Tech Preferences</h1>
            <Fade duration={1000} distance="30px" bottom>
                <div className='h-auto pt-5 pb-5 border border-gray-800 mx-2 md:mx-6 lg:mx-10 xl:mx-20 mt-10'>
                    <div className='flex flex-wrap justify-center gap-12 items-center'>
                        <div className='w-36 h-30'>
                            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-36 h-30'>
                            <img src="https://freelogopng.com/images/all_img/1657548410facebook-png.png" alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-36 h-30'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-36 h-30'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-36 h-30'>
                            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png" alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-36 h-30'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-36 h-30'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-full h-full object-contain' />
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default CompanyBasedProjects;
