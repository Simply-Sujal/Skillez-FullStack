import React from 'react'
import Accordian from '../../components/Accordian'
import { Fade } from 'react-reveal';

const FaqForResumeBuild = () => {
    const data = [
        {
            id: 1,
            question: "How can I schedule a mock interview?",
            answer: "Scheduling a mock interview is easy! Just fill out the form on our website, and our team will contact you to arrange a convenient time. We'll work with your schedule to ensure you get the most out of this valuable practice opportunity, tailored to your needs."
        }, {
            id: 2,
            question: "Are the mock interviews conducted by industry professionals?",
            answer: "Absolutely. Our mock interviews are conducted by experienced industry professionals with a deep understanding of the hiring process and the specific demands of engineering roles."
        },
        {
            id: 3,
            question: "Is there a limit to the number of mock interviews I can schedule?",
            answer: "Yes, currently, each user is allowed to schedule one mock interview. This ensures that we can accommodate as many users as possible and maintain the quality of our services. If you have additional needs or specific requests, feel free to reach out to our support team, and we'll do our best to assist you."
        },
        {
            id: 4,
            question: "Can I record the mock interview for future reference?",
            answer: "Yes, sessions are recorded for your convenience. You can review the interview afterward to identify areas for improvement."
        },
        {
            id: 5,
            question: "How do I pay for the mock interview service?",
            answer: "To avail of our services, start by filling out the form on our website. Once submitted, our team will reach out to you to discuss your requirements. After finalizing the details, you can proceed with the payment. Upon successful payment, your chosen service will be activated, and our team will initiate the process to meet your needs."
        },
        {
            id: 6,
            question: "Do you provide post-mock interview consultation?",
            answer: "Yes, we offer post-mock interview consultation to discuss your performance, provide additional tips, and answer any questions you may have about the interview process."
        },

    ]
    return (
        <>
            <div id='faq'></div>
            <div className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full text-center'>
                <Fade duration={1000} distance="30px" bottom>
                    <h2 className='text-4xl md:text-5xl font-monts dark:text-white text-black font-bold'>FAQ<span className='text-[#3182CE]'>'s</span></h2>

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
