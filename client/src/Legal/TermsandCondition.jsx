import React from 'react';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    return (
        <>
            <section className='bg-[#EEF5FF] dark:bg-slate-900 duration-300 text-black pt-10 pb-5 md:pb-10 md:pt-20'>
                <div className="max-w-[700px] mx-auto pt-8 md:pt-1 mt-5 p-4 shadow-lg rounded-lg bg-[#EEF5FF] dark:bg-slate-800 duration-300 dark:text-white text-black">
                    <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

                    <p className="mb-4">
                        Welcome to SkillEz! These terms and conditions govern your use of our website and services. By accessing or using SkillEz, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please refrain from using our website.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Use of Content</h2>
                    <p className="mb-4">
                        The content available on SkillEz, including information on skills, courses, and resources, is intended for educational and informational purposes only. You are permitted to use the content for personal, non-commercial purposes. However, modifying, distributing, reproducing, or selling any part of the content without explicit permission from the content creator is strictly prohibited.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">User Contributions</h2>
                    <p className="mb-4">
                        Users of SkillEz may contribute content related to skills and courses. By contributing, you grant SkillEz a non-exclusive, royalty-free, worldwide, perpetual license to use, reproduce, modify, and distribute your content for the purpose of providing our services.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Prohibited Activities</h2>
                    <p className="mb-4">
                        Users agree not to engage in any activities that may disrupt or interfere with the proper functioning of SkillEz or violate any applicable laws. Prohibited activities include uploading malicious code, spamming, impersonating others, or engaging in any form of harassment.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
                    <p className="mb-4">
                        SkillEz does not provide professional advice. The content on our website is not a substitute for professional guidance, and we do not make any warranties or representations regarding the accuracy or completeness of the information. Users are solely responsible for any decisions they make based on the content found on SkillEz.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
                    <p className="mb-4">
                        SkillEz, its administrators, contributors, and affiliates shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our website or the content it provides.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Modifications</h2>
                    <p className="mb-4">
                        SkillEz reserves the right to modify or terminate these terms and conditions at any time without notice. It is the user's responsibility to review these terms periodically. Continued use of our website after changes constitutes your acceptance of the modified terms.
                    </p>

                    <p className="mt-6">
                        By using SkillEz, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or concerns, please contact us.
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default TermsAndConditions;
