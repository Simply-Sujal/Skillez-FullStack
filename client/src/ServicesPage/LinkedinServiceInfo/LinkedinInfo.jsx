import React from 'react'
import LinkedinLanding from './LinkedinLanding'
import EffectiveUseOfLinkedin from './EffectiveUseOfLinkedin'
import IndividualInfo from './IndividualInfo'
import Testimonial from '../ResumeBuildingInfo/TestimonialsResume';
import ReachingOutPeople from './ReachingOutPeople';
import Footer from '../../components/Footer'


const LinkedinInfo = () => {
    const pointsForLinkedin = [
        {
            id: 1,
            topic: "Optimize your LinkedIn profile",
            points: [
                "Use a professional profile picture and background photo.",
                "Craft a compelling headline that highlights your expertise.",
                "Write a concise and engaging summary showcasing skills and experiences.",
                "Regularly update your profile with relevant accomplishments."
            ]
        },
        {
            id: 2,
            topic: "Build and expand your network",
            points: [
                "Connect with professionals from your industry and past workplaces.",
                "Personalize connection requests with a brief message.",
                "Join relevant LinkedIn groups and actively participate in discussions.",
                "Attend networking events to meet new contacts."
            ]
        },
        {
            id: 3,
            topic: "Follow companies of interest",
            points: [
                "Follow companies where you aspire to work to stay updated.",
                "Engage with their posts to increase your visibility.",
                "Use the 'See all employees on LinkedIn' feature to identify connections.",
                "Reach out to employees for informational interviews."
            ]
        },
        {
            id: 4,
            topic: "Utilize the LinkedIn job search feature",
            points: [
                "Use advanced search filters to narrow down job listings.",
                "Save job searches and set up email alerts.",
                "Research companies before applying.",
                "Tailor your application materials to each job application."
            ]
        },
        {
            id: 5,
            topic: "Use LinkedIn's 'Easy Apply' feature",
            points: [
                "Take advantage of the 'Easy Apply' option for streamlined applications.",
                "Ensure your LinkedIn profile matches your resume.",
                "Customize your application by writing a brief message.",
                "Double-check all application details before submitting."
            ]
        },
        {
            id: 6,
            topic: "Monitor your profile visibility",
            points: [
                "Adjust your privacy settings to control who can view your profile.",
                "Regularly review your profile's visibility settings.",
                "Use LinkedIn's 'Who viewed your profile' feature.",
                "Analyze profile views and engagement metrics."
            ]
        },
        {
            id: 7,
            topic: "Utilize the Alumni tool",
            points: [
                "Explore the LinkedIn Alumni tool to discover and connect with fellow alumni.",
                "Leverage your shared academic background as a conversation starter.",
                "Join alumni groups or communities on LinkedIn.",
                "Participate in alumni events or reunions organized through LinkedIn."
            ]
        },
        {
            id: 8,
            topic: "Be consistent and active",
            points: [
                "Regularly update your LinkedIn profile with new experiences.",
                "Share insightful articles, industry news, and professional updates.",
                "Engage with your network by commenting and congratulating them.",
                "Allocate dedicated time each week to engage with LinkedIn."
            ]
        },
        {
            id: 9,
            topic: "Leverage LinkedIn's 'Open to Work' feature",
            points: [
                "Activate the 'Open to Work' feature on your LinkedIn profile.",
                "Customize your job preferences to receive relevant job recommendations.",
                "Utilize the 'Share with recruiters only' option discreetly.",
                "Showcase key skills, experiences, and career aspirations."
            ]
        },
        {
            id: 10,
            topic: "Follow recruiters and HR professionals",
            points: [
                "Identify recruiters and HR professionals within your industry.",
                "Engage with their posts and share relevant content.",
                "Personalize connection requests with recruiters.",
                "Reach out to recruiters directly through LinkedIn messages."
            ]
        }
    ];

    return (
        <>
            <LinkedinLanding />
            <h1 className='bg-[#eef5ff] dark:bg-slate-900 duration-300 text-3xl md:text-5xl md:text-center text-start font-monts text-blue-500 font-bold py-4 md:pt-4 px-1'>Effective Use Of Linkedin</h1>
            <div className='flex md:flex-row-reverse flex-col'>
                <EffectiveUseOfLinkedin />
                <IndividualInfo points={pointsForLinkedin} />
            </div>
            <ReachingOutPeople />
            <Testimonial />
            <Footer />
        </>
    )
}

export default LinkedinInfo
