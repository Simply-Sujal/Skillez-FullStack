import React from 'react'
import AboutLanding from '../About/AboutLanding';
import AboutOurWork from '../About/AboutOurWork';
import Testimonial from '../ServicesPage/ResumeBuildingInfo/TestimonialsResume';
import AboutCards from '../About/AboutCards';
import JoinUs from '../About/JoinUs';
import WhyChooseUs from '../About/WhyChooseUs';
import TechStack from '../Home/TechnologyWeUsedToBuild'
import OurWork from '../Home/OurWork'
import TeamWhoBuild from '../About/TeamWhoBuild';
import Footer from '../components/Footer'
import OurExperts from '../About/OurExperts';

const About = () => {

    return (
        <>
            <AboutLanding />
            <WhyChooseUs />
            <AboutOurWork />
            <AboutCards />
            <JoinUs />
            <TechStack />
            <OurWork />
            <Testimonial />
            <TeamWhoBuild />
            <OurExperts />
            <Footer />
        </>
    )
}

export default About
