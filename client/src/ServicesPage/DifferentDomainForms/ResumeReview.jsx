import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../store/auth';
import LoginFirstPage from '../LoginFirstPage';
import FormLeftImg from './FormLeftPart.png';
import spinner from '../../assets/spinner.gif';
import { useNavigate } from 'react-router-dom';

const ResumeReview = () => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const [requirementsForResume, setrequirementsForResume] = useState({
        username: '',
        email: '',
        phone: '',
        linkedinUrl: '',
        resumeLink: '',
        service: 'Resume Review',
        aboutYou: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setrequirementsForResume({
            ...requirementsForResume,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://skill-ez-backend.vercel.app/api/service/resumereview", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requirementsForResume)
            })
            const res_data = await response.json();
            console.log("Form submitted successfully. Data:", requirementsForResume);
            console.log(res_data);
            if (response.ok) {
                toast.success("Form submit successfully");
                setrequirementsForResume({
                    username: '',
                    email: '',
                    phone: '',
                    linkedinUrl: '',
                    resumeLink: '',
                    service: 'Resume Review',
                    aboutYou: ''
                })
                navigate("/thankyouforbuying")
            } else {
                toast.error("Something went wrong!");
            }
        } catch (error) {
            console.log("Error while submmit the project form", error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            <section className="bg-gray-100 dark:bg-slate-900 pt-12 md:pt-24 duration-300">
                <div className="max-w-[1400px] mx-auto bg-[#f5f5f9] dark:bg-gray-900 duration-300 p-6 shadow-md rounded-md px-2">
                    <div className='flex justify-between flex-col-reverse md:flex-row-reverse gap-5'>
                        <div className='w-full md:w-[50%] mx-auto'>
                            <h1 className="w-full text-start text-3xl md:text-4xl font-monts font-bold text-blue-500 md:mb-6 mb-2">
                                Resume Review Form
                            </h1>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-1">
                                    <label htmlFor="username" className="block text-sm font-semibold leading-8 font-monts pt-2 text-gray-700 dark:text-white tracking-wider">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name='username'
                                        value={requirementsForResume.username}
                                        placeholder='Enter Your FullName'
                                        required
                                        id='username'
                                        className='mt-1 p-2 w-full border rounded-md text-black'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-8 font-monts  pt-2 text-gray-700 dark:text-white">Email</label>
                                    <input
                                        type="email"
                                        name='email'
                                        value={requirementsForResume.email}
                                        placeholder='Enter Your Email'
                                        required id='email'
                                        className='mt-1 p-2 w-full border rounded-md text-black'
                                        onChange={handleChange}

                                    />
                                </div>

                                <div className='mb-1'>
                                    <label htmlFor="phone" className="block text-sm font-semibold leading-8 font-monts pt-2 text-gray-700 dark:text-white tracking-wider">Phone No.</label>
                                    <input
                                        type="tel"
                                        name='phone'
                                        value={requirementsForResume.phone}
                                        placeholder='+91 Enter Your Phone'
                                        required
                                        id='phone'
                                        minLength={10}
                                        maxLength={10}
                                        className='mt-1 p-2 w-full border rounded-md text-black'
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='mb-1'>
                                    <label htmlFor="text" className="block text-sm font-semibold leading-8 font-monts pt-2 text-gray-700 dark:text-white tracking-wider">Linkedin Url</label>
                                    <input
                                        type="text"
                                        name='linkedinUrl'
                                        value={requirementsForResume.linkedinUrl}
                                        placeholder='URL Linkedin'
                                        required
                                        id='linkedin'
                                        className='mt-1 p-2 w-full border rounded-md text-black'
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='mb-1'>
                                    <label htmlFor="text" className="block text-sm font-semibold leading-8 font-monts pt-2 text-gray-700 dark:text-white tracking-wider">Service</label>
                                    <input
                                        type="text"
                                        name='resumereview'
                                        value={requirementsForResume.service}  // Set the fixed value
                                        placeholder='Enter The Domain'
                                        required
                                        id='resumereview'
                                        className='mt-1 p-2 w-full border rounded-md dark:text-white text-slate-900'
                                        disabled  // Disable the input field
                                    />
                                </div>

                                <div className='mb-1'>
                                    <label htmlFor="text" className="block text-sm font-semibold leading-8 font-monts pt-2 text-gray-700 dark:text-white tracking-wider">Resume Link</label>
                                    <input
                                        type="text"
                                        name='resumeLink'
                                        value={requirementsForResume.resumeLink}
                                        placeholder='Resume Drive Link'
                                        required
                                        id='resumeLink'
                                        className='mt-1 p-2 w-full border rounded-md text-black'
                                        onChange={handleChange}
                                    />
                                </div>

                                <label htmlFor="aboutProject" className="block text-sm font-semibold leading-8 font-monts pt-2 text-gray-700 dark:text-white tracking-wider">Tell Us About Yourselve</label>
                                <textarea
                                    name="aboutYou"
                                    required
                                    placeholder='Tell us about yourselve'
                                    value={requirementsForResume.aboutYou}
                                    onChange={handleChange}
                                    rows="5"
                                    className='mt-1 p-2 w-full border rounded-md text-black'
                                ></textarea>
                                <div className="flex justify-center pt-4">
                                    <button
                                        type="submit"
                                        className="w-full transition-all duration-200 font-karla bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-2 px-4 rounded"
                                    >
                                        {loading ? (
                                            <img src={spinner} alt="Loading" className="mx-auto w-[33px]" />
                                        ) : (
                                            'Submit 👻'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="w-full md:w-[90%]">
                            <img src={FormLeftImg} alt="formimage" class="w-full h-full dark:bg-slate-900 bg-[#f5f5f9] duration-300 hidden md:block" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ResumeReview;
