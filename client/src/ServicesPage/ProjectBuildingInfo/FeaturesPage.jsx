import React from 'react'
import SmallCardForFeatures from './SmallCardForFeatures'
import { Fade } from 'react-reveal';

const FeaturesPage = () => {
    return (
        <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-8'>
            <Fade duration={1000} distance="30px" bottom>
                <div className='max-w-[1290px] mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-1 pt-10'>
                        <SmallCardForFeatures
                            iconImage="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/on-time-icon.png"
                            title="ONTIME"
                        />
                        <SmallCardForFeatures
                            iconImage="https://e7.pngegg.com/pngimages/695/570/png-clipart-24-7-logo-24-7-service-customer-service-management-email-miscellaneous-blue-thumbnail.png"
                            title="AVAILABILITY"
                        />
                        <SmallCardForFeatures
                            iconImage="https://cdn-icons-png.flaticon.com/512/3588/3588395.png"
                            title="BUDGET FRIENDLY"
                        />
                        <SmallCardForFeatures
                            iconImage="https://lh6.googleusercontent.com/vPxZR3vr150e1LgfieaevQO4u8zvmr7ife_usOIDun6E84Mjadrh5Kqik-QwJ8P7sZ69HvbhrPvjueYXCoDXVAqn62WOMURAtssZi3e2XQJEpBbaxOrq-JUTL3IighpfsgCvUNOD"
                            title="MULTIPLE TECHSTACK"
                        />
                        <SmallCardForFeatures
                            iconImage="https://png.pngtree.com/png-clipart/20230824/original/pngtree-workplace-culture-abstract-concept-vector-illustration-picture-image_8420776.png"
                            title="PROFESSIONAL WORK"
                        />
                        <SmallCardForFeatures
                            iconImage="https://img.freepik.com/free-vector/premium-certified-quality-stamp_78370-1800.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707609600&semt=ais"
                            title="QUALITY SERVICE"
                        />
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default FeaturesPage
