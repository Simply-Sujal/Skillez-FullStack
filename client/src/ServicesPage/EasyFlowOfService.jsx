import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { Fade } from 'react-reveal';


const EasyFlowOfService = () => {
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 dark:text-white duration-300 w-full '>
            <Fade duration={1000} distance="30px" bottom>
                <div className='max-w-[1290px] mx-auto'>
                    <h1 className='text-3xl md:text-5xl font-bold font-monts text-center pt-5'><span className='text-blue-500'>Four-Step</span> Service Workflow</h1>
                    <p className='text-center text-1xl pt-2'>We Care About Customers Smooth Experience</p>

                    <div className='pt-8'>
                        <div>
                            <VerticalTimeline>

                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date={<span className='dark:text-slate-100 text-slate-900 text-[18px]'>Step 1</span>}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<FaUserLarge />}
                                >
                                    <h3 className="dark:text-white text-slate-800 font-bold text-[18px] font-monts vertical-timeline-element-title">Authentication</h3>
                                    <h4 className="dark:text-white text-slate-800 font-semibold text-[15px] font-monts vertical-timeline-element-subtitle">Verify As A User</h4>
                                    <p className='dark:text-white text-slate-800 font-extrabold text-[15px] font-monts'>
                                        It's mandatory to register and login in order to buy any service.
                                    </p>
                                </VerticalTimelineElement>


                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date={<span className='dark:text-slate-100 text-slate-900 text-[18px]'>Step 2</span>}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<FaShoppingCart />}
                                >
                                    <h3 className="text-slate-800 font-bold text-[18px] font-monts vertical-timeline-element-title">Service Selection</h3>
                                    <h4 className="text-slate-800 font-semibold text-[15px] font-monts vertical-timeline-element-subtitle">Select The Desired Service</h4>
                                    <p className='text-slate-800 text-[15px] font-monts font-extrabold'>
                                        Very easy to select the service and purchase for the work to be done.
                                    </p>
                                </VerticalTimelineElement>



                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    contentStyle={{ background: 'rgb(233,30,90,1)' }}
                                    date={<span className='dark:text-white text-slate-900 text-[18px]'>Step 3</span>}
                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                    icon={<FaWpforms />}
                                >
                                    <h3 className="dark:text-white text-slate-800 font-bold text-[18px] font-monts vertical-timeline-element-title">Form Filling</h3>
                                    <h4 className="dark:text-white text-slate-800 font-semibold text-[15px] font-monts vertical-timeline-element-subtitle">Fill Your Requirements</h4>
                                    <p className='dark:text-white text-slate-800 text-[15px] font-monts font-extrabold'>
                                        Simply fill out the form requirements, and you're 95% done.
                                    </p>
                                </VerticalTimelineElement>


                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    date={<span className='dark:text-slate-100 text-slate-900 text-[18px]'>Step 4</span>}
                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                    icon={<MdOutlinePayment />}
                                >
                                    <h3 className="text-slate-800 font-bold text-[18px] font-monts vertical-timeline-element-title">Make Payment</h3>
                                    <h4 className="text-slate-800 font-semibold text-[15px] font-monts vertical-timeline-element-subtitle">Pay For Your Service</h4>
                                    <p className='text-slate-800 text-[15px] font-monts font-extrabold'>
                                        Simply Scan The QR Code And Make Your Payment In Less Than A Minute.
                                    </p>
                                </VerticalTimelineElement>


                                <VerticalTimelineElement
                                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                    icon={<IoMdStar />}
                                />


                            </VerticalTimeline>

                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default EasyFlowOfService


