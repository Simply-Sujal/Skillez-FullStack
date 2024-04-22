import React from 'react'
import Accordian from './Accordian'
import { Fade } from 'react-reveal';

const data = [
    {
        id: 1,
        question: "What is the website all about ?",
        answer: "The website is all about providing services like project building , resume building , resume review and taking mock interview."
    }, {
        id: 2,
        question: "Is the services are free or paid ?",
        answer: "It totally depends on the service that you choose or some of them are free too."
    },
    {
        id: 3,
        question: "Is this platform only for engineering students ?",
        answer: "Yes, for now it is specially made up for engineering students."
    },
    {
        id: 4,
        question: "How easily one can make service available for them ?",
        answer: "It is super easy , you just need to follow the four steps refer (Service Section) and you are ready to go."
    },
    {
        id: 5,
        question: "Are there any SkillEz mobile apps available?",
        answer: "No, we do not currently have a mobile application, but we will undoubtedly develop one."
    },
    {
        id: 6,
        question: "Do I need to create an account to access the service on your website?",
        answer: "Yes, you must sign in before accessing or reading the content on our website."
    },
    // {
    //     id: 7,
    //     question: "",
    //     answer: "Absolutely! We encourage you to share our articles on social media, and you can also reference or link to our articles on your own blog, provided you give proper credit to the original source and follow our content usage guidelines."
    // },
    // {
    //     id: 8,
    //     question: "Can I earn money by writing a blog/article on the NoteSync website?",
    //     answer: "Yes, you may make some sort of money simply by creating a blog/article, but it must be original and not duplicated from another source."
    // },
]

const FAQ = () => {
    return (
        <>
            <div id='faq'></div>
            <div className='w-full bg-[#EEF5FF] dark:bg-slate-900 pt-14 pb-5 text-center'>
                <h2 className='text-4xl md:text-5xl text-black dark:text-white font-monts font-extrabold'>FAQ<span className='text-blue-500'>'s</span></h2>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='max-w-[980px] mx-auto px-3 my-10'>
                        {
                            data.map((item) => {
                                // destruct
                                const { question, answer } = item;
                                return (<div className='bg-[#F5F5F5] p-5 my-2 rounded-md' key={item.id}>
                                    <Accordian
                                        question={question}
                                        answer={answer}></Accordian>
                                </div>
                                );
                            })
                        }
                    </div>
                </Fade>
            </div>

        </>
    )
}

export default FAQ
