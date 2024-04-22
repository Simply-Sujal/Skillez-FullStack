import React from 'react';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <section className='bg-[#EEF5FF] dark:bg-slate-900 duration-300 text-black pt-10 pb-5 md:pb-10 md:pt-20'>
                <div className="max-w-[700px] mx-auto pt-8 md:pt-1 mt-5 p-4 shadow-lg rounded-lg bg-[#EEF5FF] dark:bg-slate-800 duration-300 dark:text-white text-black">
                    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-justify mb-4">
                        This Privacy Policy was last updated on February 16, 2024. SkillEz is your go-to platform, dedicated to offering a range of services including project building, resume creation, resume review, and mock interviews. Tailored for individuals seeking to enhance their professional skills, we prioritize your privacy and are unwavering in our commitment to securing and safeguarding your personal information. Our Privacy Policy is designed to provide transparency on how we collect, utilize, and protect your data while you make the most of our comprehensive services.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
                    <p className="mb-4">
                        We gather information directly provided by you to ensure a tailored and effective experience. This may encompass:
                    </p>
                    <ol className="list-decimal ml-6 mb-4">
                        <li>Service Provision: Your account details and project-related information are crucial for delivering our project building, resume creation, resume review, and mock interview services efficiently.</li>
                        <li>Enhancing User Experience: Analysis of usage data is conducted to improve the features, functionality, and overall performance of our platform, ensuring a seamless and enriched user experience.</li>
                        <li>Communication: Your email address may be utilized to send essential updates, service notifications, and promotional content pertinent to the services offered by Skillez, such as project building, resume creation, resume review, and mock interviews.</li>
                    </ol>

                    <h2 className="text-2xl font-bold mb-2">GDPR (General Data Protection Regulation)</h2>
                    <p className="text-justify mb-4">
                        In strict adherence to the General Data Protection Regulation (GDPR), Skillez prioritizes the protection of your personal data and is dedicated to ensuring your privacy. As you utilize our platform for services such as project building, resume creation, resume review, and mock interviews, we responsibly collect and process specific information. This encompasses account details, project-related data, and usage information, all aimed at providing you with exceptional services and enhancing your overall user experience. Your data is utilized for personalizing interactions, optimizing our platform's functionality, and delivering crucial updates. Rest assured, we are committed to maintaining the highest standards of data protection and privacy under the GDPR.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">CPRA (California Privacy Rights Act)</h2>
                    <p className="text-justify mb-4">
                        The California Privacy Rights Act (CPRA) serves to elevate your data privacy rights as a resident of California. As a testament to our dedication to your privacy, we strive to empower you with control over your personal information. Your use of NoteSync may involve the collection and processing of data for diverse purposes, such as facilitating our note-sharing services and presenting pertinent advertisements. Skillez remains committed to upholding the principles outlined in the CPRA and ensuring that your privacy rights are respected and safeguarded.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
                    <p className="text-justify mb-4">
                        The information you provide is instrumental in our commitment to deliver and maintain a spectrum of services, including project building, resume creation, resume review, and mock interviews. We utilize this data to continuously enhance, personalize, and expand our platform, tailoring the user experience to your needs. Your input, whether in the form of comments, questions, or requests, is addressed promptly and effectively. Additionally, we employ your information to communicate crucial technical notices, updates, security alerts, and support/administrative messages, ensuring that you are well-informed and supported throughout your journey with Skillez.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Sharing Your Information</h2>
                    <p className="mb-4">
                        Your personal information may be shared with:
                    </p>
                    <ol className="list-decimal ml-6 mb-4">
                        <li>Service Providers: In certain instances, we may share your personal information with trusted service providers who perform services on our behalf. These providers play a crucial role in supporting our platform's functionality and delivering a seamless experience.</li>
                        <li>Legal and Regulatory Authorities: We may disclose your personal information to legal and regulatory authorities, either upon request or as required by applicable laws. This ensures compliance with legal obligations and facilitates cooperation with authorities when necessary. Rest assured, such disclosures will be made in accordance with applicable privacy laws and regulations.</li>
                    </ol>

                    <h2 className="text-2xl font-bold mb-2">Google AdSense</h2>
                    <p className="mb-4">
                        SkillEz uses Google AdSense to serve advertisements. Google AdSense utilizes advertising cookies to display ads based on your browsing behavior. You can manage your ad preferences and opt out of personalized advertising by visiting <a href="https://adssettings.google.com/authenticated" target="_blank" className="text-blue-500">Google Ad Settings</a>.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                    <p className="dark:text-white text-slate-900 mt-8">If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:helpme@notesync.in" className="text-blue-500">helpme@notesync.in</a>.</p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
