import React from 'react'
import Accordian from '../../components/Accordian'
import { Fade } from 'react-reveal';

const FaqForResumeBuild = () => {
    const data = [
        {
            id: 1,
            question: "Is the resume building service free?",
            answer: "No, our resume building service is not free. We offer a premium service with advanced features, personalized assistance, and additional benefits. You can explore our paid plans to access these enhanced offerings and elevate your resume-building experience."
        }, {
            id: 2,
            question: "Can I edit my resume after generating it?",
            answer: "Absolutely! You have full control over your resume. After generating the initial draft, you can edit, customize, and update it at any time."
        },
        {
            id: 3,
            question: "Is my personal information secure on your platform?",
            answer: "Yes, we prioritize user privacy and employ industry-standard security measures to protect your personal information. Your data is safe with us."
        },
        {
            id: 4,
            question: "How can I get my resume?",
            answer: "Once your resume is completed, we'll send it directly to your email. Expect a prompt delivery to ensure you can start using your professionally crafted resume without delay."
        },
        {
            id: 5,
            question: "Can I create multiple resumes for different job applications?",
            answer: "Absolutely! Our service allows you to create and save multiple resumes tailored to different job positions, making your application process more versatile."
        },
        {
            id: 6,
            question: "What if I need further assistance with my resume?",
            answer: "For users seeking additional support, we offer premium services that include one-on-one consultations, personalized feedback, and more. Check our premium plans for details."
        },

    ]
    return (
        <>
            <div id='faq'></div>
            <div className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full text-center'>
                <h2 className='text-4xl md:text-5xl font-monts dark:text-white text-black font-bold'>FAQ<span className='text-[#3182CE]'>'s</span></h2>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='max-w-[980px] mx-auto px-3 pb-5 pt-5'>
                        {
                            data.map((item) => {
                                // destruct
                                const { question, answer } = item;
                                return (<div className='bg-[#F5F5F5] p-5 my-4 rounded-md' key={item.id}>
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

export default FaqForResumeBuild
