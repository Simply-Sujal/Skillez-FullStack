import React from 'react';
import ProjectBuildingImg from '../../../public/reumebuilding.png';
import { Fade } from 'react-reveal';

const AboutOurMockInterview = () => {
    return (

        <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-8'>
            <div className='max-w-[1290px] mx-auto'>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='flex flex-col md:flex-row justify-center gap-8'>
                        <div className='mx-auto'>
                            <h1 className='text-3xl md:text-5xl text-center md:text-start font-monts text-blue-500 font-bold mb-4'>About Mock Interview Service</h1>
                            <p className='text-[16px] md:text-[19px] text-justify md:px-0 px-1 dark:text-white text-black'>
                                Our mock interview service is intended to help you prepare for interviews like never before. Specifically designed for engineering students, we offer an authentic simulation of the interview process. During the mock interview, our seasoned professionals provide insightful feedback on your performance, technical expertise, and communication abilities. With the help of this program, you may hone your interview techniques, pinpoint your areas of weakness, and develop the self-assurance you need to ace actual job interviews.
                            </p>
                        </div>


                        <img src={ProjectBuildingImg} alt="Project Building" className='w-auto md:max-w-[500px] rounded-md shadow-lg mx-auto pt-1 md:pt-0 px-1 md:px-0' />

                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default AboutOurMockInterview;
