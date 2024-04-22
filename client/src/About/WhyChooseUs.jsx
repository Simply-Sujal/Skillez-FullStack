import React from 'react'
import aboutImage from './aboutpageimg.png'
import whatwedo from './whatwedo.png'
import whoweare from './whoweare.png'
import oursuccess from './oursuccess.png'
import ourapproach from './ourapproach.png'
import { Fade } from 'react-reveal';

const WhyChooseUs = () => {
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 h-[1000px] md:h-[640px] relative dark:text-white duration-300 w-full text-center '>
            <div className='max-w-[1290px] mx-auto'>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='flex justify-between gap-5 flex-col md:flex-row'>
                        <div className='w-full md:w-[65%]'>
                            <h1 className='text-[25px] md:text-3xl text-start px-2 md:px-1 pt-5 font-karla font-bold'>Why <span className='text-blue-500'>SkillEz ?</span></h1>
                            <p className='text-justify md:text-justify font-medium font-monts pt-2 px-2 md:px-1'>SkillEz is here to support engineering students on their journey to success. Think of us as your helpful career advisor. We'll provide you with advice on how to ace job interviews, help you produce compelling resumes, and construct eye-catching engineering projects. Our mission at SkillEz is to make your life as an engineering student easier and to make sure you achieve your objectives. For services created with engineering students in mind, choose us.</p>

                            <div className='flex justify-center pt-5 md:pt-10'>
                                <div className='text-start px-2 md:px-1'>
                                    <img src={whoweare} alt="" className='w-12 md:w-14 h-12 md:h-14' />
                                    <h1 className='text-[18px] md:text-[22px] font-bold dark:text-gray-300 text-gray-700 pt-2 md:pt-3'>Who we are</h1>
                                    <p className=' text-[14px] md:text-[15px] font-medium dark:text-gray-300 font-monts text-gray-900 pt-1 md:pt-2'>SkillEz is group of engineering students who came up with the idea of serving services.</p>
                                </div>
                                <div className='text-start px-2 md:px-1'>
                                    <img src={whatwedo} alt="" className='w-12 md:w-14 h-12 md:h-14' />
                                    <h1 className='text-[18px] md:text-[22px] font-bold dark:text-gray-300 text-gray-700 pt-2 md:pt-3'>What do we do</h1>
                                    <p className='text-[14px] md:text-[15px] font-medium dark:text-gray-300 font-monts text-gray-900 pt-1 md:pt-2'>SkillEz Provides Multiple Services To Engineering Studets like Projects Building,Resume...</p>
                                </div>
                            </div>
                            <div className='flex justify-between pt-5 md:pt-10'>
                                <div className='text-start px-2 md:px-1'>
                                    <img src={ourapproach} alt="" className='w-12 md:w-14 h-12 md:h-14' />
                                    <h1 className='text-[18px] md:text-[22px] font-bold dark:text-gray-300 text-gray-700 pt-2 md:pt-3'>Our approach</h1>
                                    <p className='text-[14px] md:text-[15px] font-medium dark:text-gray-300 font-monts text-gray-900 pt-1 md:pt-2'>We Provide Service in a Much Easier Way for Very Little Money</p>
                                </div>
                                <div className='text-start px-2 md:px-1'>
                                    <img src={oursuccess} alt="" className='w-12 md:w-14 h-12 md:h-14' />
                                    <h1 className='text-[18px] md:text-[22px] font-bold dark:text-gray-300 text-gray-700 pt-2 md:pt-3'>Our success story</h1>
                                    <p className='text-[14px] md:text-[15px] font-medium dark:text-gray-300 font-monts text-gray-900 pt-1 md:pt-2'>We Helped Multiple Folks In Past In Getting Their Job To Be Done...</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-10 md:pt-16 pb-16 px-2'>
                            <img src={aboutImage} alt="" className='w-[100%] h-full' />
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default WhyChooseUs
