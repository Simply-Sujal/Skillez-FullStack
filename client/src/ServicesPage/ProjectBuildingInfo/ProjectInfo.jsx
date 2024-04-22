import React from 'react'
import ProjectInfoLanding from './ProjectInfoLanding'
import AboutOurProjectService from './AboutOurProjectService'
import FeaturesPage from './FeaturesPage'
import GalleryProject from './GalleryProject'
import Testimonials from './Testimonials'
import FaqForProjectInfo from './FaqForProjectInfo'
import Footer from '../../components/Footer'

const ProjectInfo = () => {
    return (
        <>
            <ProjectInfoLanding />
            <AboutOurProjectService />
            <FeaturesPage />
            <GalleryProject />
            <Testimonials />
            <FaqForProjectInfo />
            <Footer />
        </>
    )
}

export default ProjectInfo
