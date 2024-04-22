import React from 'react'
import ResumeBuildingInfoLanding from './ResumeBuildingInfoLanding'
import AboutOurResumeBuilding from './AboutOurResumeBuilding'
import FeatureResumeBuilding from './FeatureResumeBuilding'
import GalleryResume from './GalleryResume'
import TestimonialsResume from './TestimonialsResume'
import FaqForResumeBuild from './FaqForResumeBuild'
import Footer from '../../components/Footer'

const ResumeBuildInfo = () => {
    return (
        <>
            <ResumeBuildingInfoLanding />
            <AboutOurResumeBuilding />
            <FeatureResumeBuilding />
            <GalleryResume />
            <TestimonialsResume />
            <FaqForResumeBuild />
            <Footer />
        </>
    )
}

export default ResumeBuildInfo
