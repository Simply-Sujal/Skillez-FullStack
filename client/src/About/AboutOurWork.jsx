import React from 'react';
// import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const AboutOurWork = () => {
    return (
        <div className='bg-[#eef5ff] dark:bg-slate-900 dark:text-white duration-300 w-full'>
            <Fade duration={1000} distance="30px" bottom>
                <div className='max-w-[1290px] mx-auto pt-10'>

                    <div className='flex flex-col md:flex-row justify-between items-center gap-2 pt-32 md:pt-5'>
                        <div className='w-full md:w-[70%] border-r-2 border-gray-500 pr-0 md:pr-4'>
                            <p className='text-[17px] md:text-[25px] text-justify md:px-1 px-2 '>
                                We specialize in enhancing the portfolios of Indian engineering students, offering a range of customizable services. Students can choose from resume writing, portfolio design, LinkedIn optimization, and more, tailored to their needs. Our goal is to provide the best services, increasing their chances of securing their dream job quickly.
                            </p>
                        </div>
                        <div className='w-full md:w-[30%] mt-2 md:mt-0'>
                            <p className='pl-2 md:pl-4 text-2xl md:text-3xl'>Explore our dedicated team of enthusiastic experts.</p>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1220px] flex flex-col md:flex-row justify-between mx-auto mt-8 md:mt-16 gap-10 pb-16'>
                    <div className='w-full md:w-[30%] text-center px-2'>
                        <img src="https://static-00.iconduck.com/assets.00/rocket-emoji-2048x2048-sykv2c0e.png" alt="" className='w-20 h-20 object-fit mb-2 mx-auto pt-1' />
                        <h1 className='font-bold font-monts pt-2 text-blue-500 uppercase'>On Time Delivery</h1>
                        <p className='pt-2 text-gray-700 dark:text-gray-300 '>We pride ourselves on delivering products punctually to our clients, ensuring timely and reliable service.</p>
                    </div>
                    <div className='w-full md:w-[30%] text-center px-2'>
                        <img src="https://static-00.iconduck.com/assets.00/rocket-emoji-2048x2048-sykv2c0e.png" alt="" className='w-20 h-20 object-fit mb-2 mx-auto pt-1' />
                        <h1 className='font-bold font-monts pt-2 text-blue-500 uppercase'>24/7 Availability</h1>
                        <p className='pt-2 text-gray-700 dark:text-gray-300 '>Constantly accessible for unbroken service and assistance, 24/7 availability for uninterrupted service and support.</p>
                    </div>
                    <div className='w-full md:w-[30%] text-center px-2'>
                        <img src="https://static-00.iconduck.com/assets.00/rocket-emoji-2048x2048-sykv2c0e.png" alt="" className='w-20 h-20 object-fit mb-2 mx-auto pt-1' />
                        <h1 className='font-bold font-monts pt-2 text-blue-500 uppercase'>Affordable Price</h1>
                        <p className='pt-2 text-gray-700 dark:text-gray-300 '>We offer high-quality products at exceptionally reasonable prices, ensuring exceptional value for your investment.</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default AboutOurWork;
