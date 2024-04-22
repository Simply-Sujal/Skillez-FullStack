import React from 'react';
import { Fade } from 'react-reveal';

const GalleryResume = () => {
    const imagesMockInterview = [
        {
            id: 1,
            imageUrl: "https://glencallum.co.uk/wp-content/uploads/2020/03/shutterstock_156792509-Video-interview-18-Mar-20.jpg "
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
        },
        {
            id: 5,
            imageUrl: "https://images.unsplash.com/photo-1565688527174-775059ac429c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
        },
        {
            id: 6,
            imageUrl: "https://images.unsplash.com/photo-1610702877236-6622fd791234?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
        }
    ]
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-8'>
            <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between px-4'>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='w-full md:w-2/5 mb-8 md:mb-0'>
                        <h1 className='text-4xl md:text-5xl font-monts text-blue-500 font-bold mb-4 text-center md:text-left'>Gallery Mock Interview</h1>
                        <p className='text-lg md:text-xl font-monts font-bold leading-relaxed dark:text-white text-gray-700 mb-6 text-center md:text-left'>
                            Explore our dynamic gallery featuring standout projects, impactful mock interviews, and finely tuned resumes, showcasing our expertise and commitment.
                        </p>
                        <p className='dark:text-white text-gray-700 font-monts text-center md:text-left'>
                            Free Projects You Can Look At <a href="https://www.notesync.in/project" target='_blank' rel="noopener noreferrer" className='text-blue-500 underline'>Free Projects</a>
                        </p>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-[50%]'>
                        {imagesMockInterview.map((item, index) => (
                            <div key={index} className={`relative overflow-hidden bg-white shadow-md rounded-lg ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                                <img
                                    src={item.imageUrl}
                                    alt={`pic${index + 1}`}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default GalleryResume;
