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
                            iconImage="https://cdn-icons-png.flaticon.com/512/2125/2125395.png"
                            title="ADVANCED TOOLING"
                        />
                        <SmallCardForFeatures
                            iconImage="https://cdn-icons-png.flaticon.com/256/4413/4413537.png"
                            title="PROFESSIONAL DESIGN"
                        />
                        <SmallCardForFeatures
                            iconImage="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                            title="EDITING"
                        />
                        <SmallCardForFeatures
                            iconImage="https://cdni.iconscout.com/illustration/premium/thumb/job-vacancy-7117337-5769903.png?f=webp"
                            title="JOB ALERT"
                        />
                        <SmallCardForFeatures
                            iconImage="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2021/02/feedback-logo_601ff442a45f2.png"
                            title="FEEDBACK"
                        />
                    </div>
                </Fade>
            </div>
        </section>

    )
}

export default FeatureResumeBuilding
