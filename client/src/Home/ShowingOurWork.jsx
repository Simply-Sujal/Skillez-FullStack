import React from 'react'
import "../components/WorkingField.css"
import PerformActivities from '../components/PerformActivities'
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

function Destination() {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='dark:bg-slate-900 bg-[#EEF5FF] w-full pt-2 pb-2'>
            <Fade duration={1000} distance="30px" bottom>
                <div className='destination'>
                    <h1 className='text-3xl md:text-5xl font-karla text-center mb-2 text-black dark:text-white font-bold'>Most Popular <span className='text-blue-500'>Domain </span></h1>
                    <p className='text-[16px] md:text-xl abt-pdes dark:text-white text-black'>Optimal domain selection is key for attracting projects tailored to your expertise.</p>
                    <PerformActivities
                        className="first-des"
                        heading="Web Development"
                        text="Good web projects are vital in today's digital landscape for various compelling reasons. Firstly, they significantly impact user engagement by offering an intuitive and seamless experience. A well-designed website or web application ensures that users can easily navigate."
                        img1="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
                        img2="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg "
                    />
                    <PerformActivities
                        className="first-des-reverse"
                        heading="Resume Building"
                        text="Android development is crucial in the modern tech landscape, enabling the creation of versatile and powerful mobile applications. With a vast user base, Android provides a vast market for developers to reach a diverse audience. The flexibility of the Android platform allows for innovative and customizable app development, accommodating various industries and user needs."
                        img1="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        img2="https://plus.unsplash.com/premium_photo-1661310100278-c06a78f31239?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <PerformActivities
                        className="first-des"
                        heading="Resume Review"
                        text="Android development is crucial in the modern tech landscape, enabling the creation of versatile and powerful mobile applications. With a vast user base, Android provides a vast market for developers to reach a diverse audience. The flexibility of the Android platform allows for innovative and customizable app development, accommodating various industries and user needs."
                        img1="https://az505806.vo.msecnd.net/cms/de687b1a-75e0-4b62-9aa0-3ce2999f1de1/dcc6c941-c52a-4013-8bb1-8ff05551bd1a-lg.jpg"
                        img2="https://images.squarespace-cdn.com/content/5bae8be5fb22a57169d22b03/1575310450117-LDLU6L731O7I0X20QZDL/Resume+Review+Draft+08+Web+Final+copy.jpg?format=1500w&content-type=image%2Fjpeg"
                    />
                    <PerformActivities
                        className="first-des-reverse"
                        heading="Mock Interview"
                        text="Android development is crucial in the modern tech landscape, enabling the creation of versatile and powerful mobile applications. With a vast user base, Android provides a vast market for developers to reach a diverse audience. The flexibility of the Android platform allows for innovative and customizable app development, accommodating various industries and user needs."
                        img1="https://www.onrec.com/sites/onrec/directory/files/Blog-Popular-interview-questions.jpg"
                        img2="https://cdn.corporatefinanceinstitute.com/assets/mock-interview-guide.jpeg"
                    />
                    <div className='mx-auto pt-20 ml-[30%] md:ml-[45%]'>
                        <Link to='/about' onClick={handleClick} class="relative inline-flex items-center justify-center p-4 px-9 md:px-14 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full dark:text-slate-100 text-slate-900 transition-all duration-300 transform group-hover:translate-x-full ease">Know More</span>
                            <span class="relative invisible">Button Text</span>
                        </Link>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Destination
