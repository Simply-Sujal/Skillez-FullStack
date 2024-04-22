import React from 'react'
import Accordian from '../../components/Accordian'
import { Fade } from 'react-reveal';

const data = [
    {
        id: 1,
        question: "What exactly meaning project building ?",
        answer: "A project building service, in the context of above question involves the process of creating, developing, and delivering customized software projects for clients or users."
    },
    {
        id: 2,
        question: "Is project building service free ?",
        answer: "No, our Project Building Service is not free. We offer professional development services at a competitive price, tailored to your specific needs. Get in touch for a detailed quote based on your project requirements."
    },
    {
        id: 3,
        question: "What are the different domain of project we build ?",
        answer: "We specialize in building projects across various domains, including web development, app development services using native technologies exclusively. Our team leverages native frameworks to create robust and optimized mobile applications tailored to your requirements."
    },
    {
        id: 4,
        question: "Is these type of service only for engineering students or it is for everyone around the globe ?",
        answer: "Our project building services are currently tailored for engineering students. We aim to provide specialized support to enhance the portfolios of engineering students, offering services such as resume writing, portfolio design, LinkedIn optimization, and more. Stay tuned for future updates as we may expand our services to a broader audience."
    },
    {
        id: 5,
        question: "How to pay for any services that we opted for ?",
        answer: "To avail of our services, start by filling out the form on our website. Once submitted, our team will reach out to you to discuss your requirements. After finalizing the details, you can proceed with the payment. Upon successful payment, your chosen service will be activated, and our team will initiate the process to meet your needs."
    },
    {
        id: 6,
        question: "Do we provide post launch service ?",
        answer: "Yes, we do offer post-launch services to ensure your project's continued success. However, for the addition of new features beyond the initially agreed scope, additional charges may apply. Our team is committed to providing ongoing support and assistance to enhance your project's performance and functionality."
    },

]

const FaqForProjectInfo = () => {
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

export default FaqForProjectInfo
