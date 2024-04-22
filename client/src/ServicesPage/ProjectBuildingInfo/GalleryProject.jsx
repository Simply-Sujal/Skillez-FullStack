import React from 'react';
import Notesync from './Assets/Notesync.jpg'
import amazon from './Assets/amazon.png'
import burger from './Assets/burger.png'
import business from './Assets/business.png'
import boringai from './Assets/boringai.png'
import travel from './Assets/Travel.png'
import { Fade } from 'react-reveal';

const GalleryProject = () => {
    const imagesOfProject = [
        {
            id: 1,
            image1: Notesync
        },
        {
            id: 2,
            image1: amazon
        },
        {
            id: 3,
            image1: burger
        },
        {
            id: 4,
            image1: business
        },
        {
            id: 5,
            image1: boringai
        },
        {
            id: 6,
            image1: travel
        }
    ]
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-8'>
            <Fade duration={1000} distance="30px" bottom>
                <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between px-4'>
                    <div className='w-full md:w-2/5 mb-8 md:mb-0'>
                        <h1 className='text-4xl md:text-5xl font-monts text-blue-500 font-bold mb-4 text-center md:text-left'>Gallery Project</h1>
                        <p className='text-lg md:text-xl font-monts font-bold leading-relaxed dark:text-white text-gray-700 mb-6 text-center md:text-left'>
                            Explore our dynamic gallery featuring standout projects, impactful mock interviews, and finely tuned resumes, showcasing our expertise and commitment.
                        </p>
                        <p className='dark:text-white text-gray-700 font-monts text-center md:text-left'>
                            Free Projects You Can Look At <a href="https://www.notesync.in/project" target='_blank' rel="noopener noreferrer" className='text-blue-500 underline'>Free Projects</a>
                        </p>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-[50%]'>

                        {
                            imagesOfProject.map((item, index) => (
                                <div key={index} className={`relative overflow-hidden bg-white shadow-md rounded-lg ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                                    <img
                                        src={item.image1}
                                        alt={`pic${index + 1}`}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            ))
                        }

                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default GalleryProject;
