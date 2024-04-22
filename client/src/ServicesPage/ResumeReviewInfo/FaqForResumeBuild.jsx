import React from 'react'
import Accordian from '../../components/Accordian'
import { Fade } from 'react-reveal';

const FaqForResumeBuild = () => {
    const data = [
        {
            id: 1,
            question: "How does the resume review process work?",
            answer: "Our experienced team of professionals carefully assesses your resume, providing constructive feedback on content, formatting, and overall effectiveness."
        }, {
            id: 2,
            question: "How long does the resume review take?",
            answer: "Our team strives to deliver timely reviews. Typically, you can expect feedback within 4-5 business days after submitting your resume."
        },
        {
            id: 3,
            question: "Is the resume review service free?",
            answer: "Yes, our resume review service is provided at no cost. We believe in supporting individuals on their career journey by offering valuable insights to enhance their resumes. Feel free to submit your resume for a complimentary review!"
        },
        {
            id: 4,
            question: "What format should my resume be in for the review?",
            answer: "For the resume review service, please upload your resume to Google Drive in pdf or word format and share the link with us. This ensures a smooth process and allows our team to provide you with comprehensive feedback on your document."
        },
        {
            id: 5,
            question: "Can I request a re-review after making changes?",
            answer: "Absolutely! If you've made updates based on our feedback and want a reassessment, you can request a re-review of your resume."
        },
        {
            id: 6,
            question: "Do you provide tips for improving specific sections of the resume?",
            answer: "Yes, our feedback is detailed and includes specific suggestions for each section of your resume, empowering you to make targeted improvements."
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
