import React from 'react';
import ProjectBuildingImg from '../../../public/ProjectBuilding.png';
import { Fade } from 'react-reveal';

const AboutOurProjectService = () => {
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-8'>
            <Fade duration={1000} distance="30px" bottom>
                <div className='max-w-[1290px] mx-auto'>
                    <div className='flex flex-col md:flex-row justify-center gap-8'>
                        <div className='mx-auto'>
                            <h1 className='text-3xl md:text-5xl text-center md:text-start font-monts text-blue-500 font-bold mb-4'>About Website Building Service</h1>
                            <p className='text-[16px] md:text-[19px] text-justify md:px-0 px-1 dark:text-white text-black'>
                                In our Website Building section, we specialize in crafting custom websites using MERN (MongoDB, Express.js, React.js, Node.js) and Python-based frameworks. During consultation, we discuss costs over a call, letting you choose the best technology stack. We promise timely delivery and regular progress updates. Your ideas matter, and we're committed to making them a reality in a straightforward and budget-friendly way. Please note, charges may vary based on project complexity.
                            </p>
                        </div>

                        <div>
                            <img src={ProjectBuildingImg} alt="Project Building" className='w-auto md:max-w-[500px] rounded-md shadow-lg mx-auto pt-1 md:pt-0 px-1 md:px-0' />
                        </div>
                    </div>
                </div>
            </Fade>
        </section>

    );
};

export default AboutOurProjectService;
