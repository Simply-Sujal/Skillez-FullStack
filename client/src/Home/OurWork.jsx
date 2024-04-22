import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const OurWork = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    }
    const workWeProvide = [
        {
            id: 1,
            workTitle: "Web Project",
            aboutOurWork: "We take great satisfaction in offering state-of-the-art web development solutions that are customized to our clients...",
            workImage: "https://png.pngtree.com/png-vector/20190611/ourlarge/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496210.jpg",
            linkUrl: "/projectinfo"
        },
        {
            id: 2,
            workTitle: "App Development",
            aboutOurWork: "Our app development services focus on creating user-friendly and innovative mobile applications...",
            workImage: "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg",
            linkUrl: "/projectinfo"
        },
        {
            id: 3,
            workTitle: "Resume Building",
            aboutOurWork: "With the help of our resume building service, professionals at any level will be empowered and their distinct abilities...",
            workImage: "https://img.freepik.com/free-vector/resume-writing-service-abstract-concept-illustration-copywriting-service-cv-online-professional-help-writing-resume-cover-letter-candidate-profile-career-summary_335657-143.jpg",
            linkUrl: "/resumebuildinginfo"
        },
        {
            id: 4,
            workTitle: "Resume Review",
            aboutOurWork: "With the help of our resume review service, you can make your resume stand out in the crowded job market...",
            workImage: "https://img.freepik.com/premium-vector/flat-design-review-candidate-resume-document_106954-2015.jpg",
            linkUrl: "/resumereviewinfo"
        },
        {
            id: 5,
            workTitle: "Help You In Your OnGoing Projects",
            aboutOurWork: "With the help of our Helping in Ongoing Project service, you can be sure that your projects will proceed smoothly...",
            workImage: "https://img.freepik.com/free-vector/data-analysis-concept_114360-448.jpg",
            linkUrl: "/service"
        },
        {
            id: 6,
            workTitle: "UI/UX Design",
            aboutOurWork: "Our design professionals are committed to building interfaces that smoothly combine usefulness and aesthetics...",
            workImage: "https://img.freepik.com/free-vector/wireframing-concept-illustration_114360-1249.jpg",
            linkUrl: "/service"
        },
    ];

    return (
        <section className='bg-[#EEF5FF] w-full dark:bg-slate-900 dark:text-white duration-300 relative'>
            <div className='max-w-[1290px] mx-auto py-4 md:py-10 px-2'>
                <h1 className='text-3xl md:text-5xl font-karla text-center mb-2 font-bold'>Your Life Just Got <span className='text-[#3182CE]'>Easier</span></h1>
                <p className='text-center mb-8 tetx-[15px] md:text-[18px]'>Empowering Engineers with <span className='border-b-2 border-[#3182CE] font-monts'>Optimal Solutions.</span> </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {workWeProvide.map((item, index) => (
                        <Fade key={item.id} duration={1000} delay={index * 200} distance="30px" bottom>
                            <div className='dark:bg-slate-800 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105'>
                                <img src={item.workImage} alt={item.workTitle} className='w-full object-fit rounded-md mb-4' />
                                <h2 className='text-xl font-semibold mb-3 font-karla text-blue-500'>{item.workTitle}</h2>
                                <p className='dark:text-slate-200 text-gray-800 mb-4 font-monts'>{item.aboutOurWork}</p>


                                <Link to={item.linkUrl} onClick={handleClick} class="relative inline-flex items-center justify-center p-4 px-9 md:px-14 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute flex items-center justify-center w-full h-full text-slate-900 dark:text-slate-100 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                    <span class="relative invisible">Button Text</span>
                                </Link>


                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
