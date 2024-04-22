import React from 'react'
import SmallCardForFeatures from './SmallCardForResumeFeatures'
import { Fade } from 'react-reveal';

const FeatureResumeBuilding = () => {
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-8'>

            <div className='max-w-[1290px] mx-auto'>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-1 pt-10'>
                        <SmallCardForFeatures
                            iconImage="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/on-time-icon.png"
                            title="ONTIME"
                        />
                        <SmallCardForFeatures
                            iconImage="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2021/02/feedback-logo_601ff442a45f2.png"
                            title="FEEDBACK"
                        />
                        <SmallCardForFeatures
                            iconImage="https://e7.pngegg.com/pngimages/184/670/png-clipart-computer-icons-icon-funds-information-career-guidance-text-logo.png"
                            title="GUIDANCE"
                        />
                        <SmallCardForFeatures
                            iconImage="https://cdni.iconscout.com/illustration/premium/thumb/job-vacancy-7117337-5769903.png?f=webp"
                            title="JOB ALERT"
                        />
                        <SmallCardForFeatures
                            iconImage="https://pngimg.com/d/free_PNG90771.png"
                            title="FREE OF COST"
                        />
                        <SmallCardForFeatures
                            iconImage="https://www.pngitem.com/pimgs/m/626-6262293_transparent-expert-icon-png-group-of-people-icon.png"
                            title="EXPERTS"
                        />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default FeatureResumeBuilding
