import React from 'react';
import ProjectBuildingImg from '../../../public/reumebuilding.png';
import { Fade } from 'react-reveal';

const AboutOurResumeBuilding = () => {
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-8'>
            <div className='max-w-[1290px] mx-auto'>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='flex flex-col md:flex-row justify-center gap-8'>
                        <div className='mx-auto'>
                            <h1 className='text-3xl md:text-5xl text-center md:text-start font-monts text-blue-500 font-bold mb-4'>About Resume Building Service</h1>
                            <p className='text-[16px] md:text-[19px] text-justify md:px-0 px-1 dark:text-white text-black'>
                                Our professional resume building service is tailored to elevate your career prospects by crafting a compelling and polished document that showcases your skills, accomplishments, and potential. Our experienced team of writers ensures your resume is not only visually appealing but also strategically aligned with industry standards, optimizing your chances of standing out to potential employers. We prioritize individuality, focusing on personalized content that reflects your unique strengths and qualifications.
                            </p>
                        </div>

                        <div>
                            <img src={ProjectBuildingImg} alt="Project Building" className='w-auto md:max-w-[500px] rounded-md shadow-lg mx-auto pt-1 md:pt-0 px-1 md:px-0' />
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default AboutOurResumeBuilding;
