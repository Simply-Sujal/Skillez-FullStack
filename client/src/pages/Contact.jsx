import React, { useState } from 'react';
import { useAuth } from '../store/auth';
import ContactLanding from '../ContactUs/ContactLanding';
import Wayofcontact from '../ContactUs/Wayofcontact';
import Newsletter from '../components/Newsletter';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import { Fade } from 'react-reveal';

// const defaultContactFormData = {
//     username: "",
//     email: "",
//     message: "",
// };

const Contact = () => {
    const [contact, setContact] = useState({
        username: '',
        email: '',
        message: '',
    });

    const [userData, setUserData] = useState(true);
    const { user } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: ""
        })
        setUserData(false);
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
        // console.log(contact)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://skill-ez-backend.vercel.app/api/form/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                setUserData({
                    username: "",
                    email: "",
                    message: "",
                });
                // const responseData = await response.json();
                // alert(responseData);
                // console.log(responseData);
                toast.success("Submit Successfully")
            } else {
                // Handle API error here
                console.error("API Error:", response.status, response.statusText);
            }
        } catch (error) {
            console.log("error", error);
            toast.error("Not Submitted");
        }
    };

    return (
        <>
            <ContactLanding />
            <Wayofcontact />

            <section className='bg-[#eef5ff] dark:bg-slate-800 dark:text-slate-800 text-white h-screen'>
                <div className='max-w-[1290px] mx-auto flex flex-col md:flex-row justify-center gap-0 md:gap-10 dark:bg-slate-800 items-center align-top px-3 pb-5'>
                    <Fade duration={1000} distance="30px" bottom>
                        <div className='md:mr-4 mb-8 md:mb-0 mt-4'>
                            <img
                                src='https://alldigiseo.com/wp-content/uploads/2021/07/contact.jpg'
                                alt='Customer Support'
                                width='400'
                                height='400'
                                className='rounded-lg'
                            />
                        </div>
                        <div className='w-full md:w-[500px] font-monts'>
                            <form onSubmit={handleSubmit} className='space-y-5 pt-10 pb-4 md:pt-3'>
                                <div>
                                    <label htmlFor='username' className='text-[15px] font-semibold pb-2 text-slate-800 dark:text-slate-200 flex items-center gap-2'>
                                        <FaUserAlt className='text-[22px] text-slate-600' />  Username
                                    </label>
                                    <input
                                        type='text'
                                        name='username'
                                        required
                                        placeholder='Enter your username'
                                        value={contact.username}
                                        onChange={handleInput}
                                        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 text-[#3C486B]'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email' className='text-[15px] font-semibold pb-2 text-slate-800 dark:text-slate-200 flex items-center gap-2'>
                                        <MdEmail className='text-[24px] text-slate-600' /> Email
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        required
                                        placeholder='Enter your email'
                                        value={contact.email}
                                        onChange={handleInput}
                                        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 text-[#3C486B]'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='message' className='text-[15px] font-semibold pb-2 text-slate-800 dark:text-slate-200 flex items-center gap-2'>
                                        <FaMessage className='text-[20px] text-slate-600' /> Message
                                    </label>
                                    <textarea
                                        name='message'
                                        required
                                        placeholder='Enter your message'
                                        value={contact.message}
                                        onChange={handleInput}
                                        rows='5'
                                        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 text-[#3C486B]'
                                    ></textarea>
                                </div>


                                <button type='submit' class="md:left-[0%] left-[32%] relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-blue-200 rounded hover:bg-white group">
                                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-blue-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-center font-monts font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-white">Submit</span>
                                </button>
                            </form>
                        </div>
                    </Fade>
                </div>
                <div className='pt-0 md:pt-32 '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8029864445784!2d85.81095879678954!3d20.349755999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190919bc8f360f%3A0x5f698e918e3440f1!2sKIIT%20School%20Of%20Computer%20Engineering!5e0!3m2!1sen!2sin!4v1702119894289!5m2!1sen!2sin" width="100%" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Newsletter className="my-8" />
                <Footer />
            </section>

        </>
    );
};

export default Contact;
