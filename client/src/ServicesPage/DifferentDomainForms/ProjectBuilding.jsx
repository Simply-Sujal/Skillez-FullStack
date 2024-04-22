import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import LoginFirstPage from '../LoginFirstPage';
import FormLeftImg from './FormLeftPart.png';
import spinner from '../../assets/spinner.gif';


const ProjectBuilding = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const [requirementsForProject, setRequirementsForProject] = useState({
        username: '',
        email: '',
        phone: '',
        linkedinUrl: '',
        titleOfTheProject: '',
        aboutProject: '',
        deadlineDate: '',
        imageUrl: '',
        service: 'Website Building',
        startingFrom: '₹249',
        priceRange: [249, 9999]
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRequirementsForProject({
            ...requirementsForProject,
            [name]: value,
        });
    };

    const handlePriceChange = (newRange) => {
        setRequirementsForProject({
            ...requirementsForProject,
            priceRange: newRange,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://skill-ez-backend.vercel.app/api/service/projectbuilding", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requirementsForProject)
            })
            const res_data = await response.json();
            console.log("Form submitted successfully. Data:", requirementsForProject);
            console.log(res_data);
            if (response.ok) {
                toast.success("Form submit successfully");
                setRequirementsForProject({
                    username: '',
                    email: '',
                    phone: '',
                    linkedinUrl: '',
                    titleOfTheProject: '',
                    aboutProject: '',
                    deadlineDate: '',
                    imageUrl: '',
                    service: 'Website Building',
                    startingFrom: '₹249',
                    priceRange: [249, 9999]
                })
                navigate("/thankyouforbuying")
            } else {
                toast.error("Form not submitted");
            }
        } catch (error) {
            console.log("Error while submmit the project form", error)
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            {/* {
                user ?
                    ( */}
            <section className="bg-gray-100 dark:bg-slate-900 pt-12 md:pt-24 duration-300">
                <div className="max-w-[1400px] mx-auto bg-[#f5f5f9] dark:bg-gray-900 duration-300 p-6 shadow-md rounded-md px-2">
                    <div className='flex justify-between flex-col-reverse md:flex-row-reverse gap-5'>
                        <div className='w-full md:w-[50%] mx-auto'>
                            <h1 className="w-full text-start text-3xl md:text-4xl font-monts font-bold text-blue-500 md:mb-6 mb-4">
                                Website Building Form
                            </h1>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-sm font-semibold leading-8 font-monts text-gray-700 dark:text-white">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name='username'
                                        value={requirementsForProject.username}
                                        placeholder='Enter Your FullName'
                                        required
                                        id='username'
                                        className='mt-2 p-2 w-full border rounded-md text-black'
                                        onChange={handleChange}
                                    />
                                </div>

                                <label htmlFor="email" className="block text-sm font-semibold leading-8 font-monts text-gray-700 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    value={requirementsForProject.email}
                                    placeholder='Enter Your Email'
                                    required id='email'
                                    className='mt-2 p-2 w-full border rounded-md text-black'
                                    onChange={handleChange}

                                />

                                <label htmlFor="phone" className="block text-sm font-semibold leading-8 font-monts pt-4 text-gray-700 dark:text-white">Phone No.</label>
                                <input
                                    type="tel"
                                    name='phone'
                                    value={requirementsForProject.phone}
                                    placeholder='+91 Enter Your Phone'
                                    required
                                    id='phone'
                                    minLength={10}
                                    maxLength={10}
                                    className='mt-2 p-2 w-full border rounded-md text-black'
                                    onChange={handleChange}
                                />

                                <label htmlFor="linkedin" className="block text-sm font-semibold leading-8 font-monts  pt-4 text-gray-700 dark:text-white">Linkedin Url</label>
                                <input
                                    type="text"
                                    name='linkedinUrl'
                                    value={requirementsForProject.linkedinUrl}
                                    placeholder='URL Linkedin'
                                    required
                                    id='linkedin'
                                    className='mt-2 p-2 w-full border rounded-md text-black'
                                    onChange={handleChange}
                                />


                                <label htmlFor="domain" className="block text-sm font-semibold leading-8 font-monts  pt-4 text-gray-700 dark:text-white">Service</label>
                                <input
                                    type="text"
                                    name='service'
                                    value={requirementsForProject.service}  // Set the fixed value
                                    id='service'
                                    className='mt-2 p-2 w-full border rounded-md dark:text-white text-slate-900'
                                    disabled  // Disable the input field
                                    onChange={handleChange}
                                />

                                <label htmlFor="titleOfTheProject" className="block text-sm font-semibold leading-8 font-monts  pt-4 text-gray-700 dark:text-white">Title For Project</label>
                                <input
                                    type="text"
                                    name='titleOfTheProject'
                                    value={requirementsForProject.titleOfTheProject}
                                    placeholder='Title For the Project'
                                    required
                                    id='titleOfTheProject'
                                    className='mt-1 p-2 w-full border rounded-md text-black'
                                    onChange={handleChange}
                                />

                                <label htmlFor="deadline" className="block text-sm font-semibold leading-8 font-monts  pt-4 text-gray-700 dark:text-white">Deadline</label>
                                <input
                                    type="date"
                                    name='deadlineDate'  // Provide a name for the field
                                    value={requirementsForProject.deadlineDate}
                                    required
                                    id='deadline'  // Match the id with the htmlFor value of the label
                                    className='mt-2 p-2 w-full border rounded-md text-black'
                                    onChange={handleChange}
                                />


                                <label htmlFor="aboutProject" className="block text-sm font-semibold leading-8 font-monts  pt-4 text-gray-700 dark:text-white">About Project</label>
                                <textarea
                                    name="aboutProject"
                                    required
                                    placeholder='Tell us about the project you need'
                                    value={requirementsForProject.aboutProject}
                                    onChange={handleChange}
                                    rows="5"
                                    className='mt-2 p-2 w-full border rounded-md text-black'
                                ></textarea>

                                <label htmlFor="imageUrl" className="block text-sm font-semibold leading-8 font-monts  pt-4 text-gray-700 dark:text-white">Prototypes Project Images</label>
                                <input
                                    type="text"
                                    name='imageUrl'
                                    value={requirementsForProject.imageUrl}
                                    placeholder='Images You Wish To Share With Us any Prototype'
                                    required
                                    id='imageUrl'
                                    className='mt-2 p-2 w-full border rounded-md text-black'
                                    onChange={handleChange}
                                />


                                <label htmlFor="startingFrom" className="block text-sm font-semibold leading-8 font-monts  pt-4 text-gray-700 dark:text-white">Starting From</label>
                                <input
                                    type="text"
                                    name='startingFrom'
                                    value={requirementsForProject.startingFrom}  // Set the fixed value
                                    id='startingFrom'
                                    className='mt-2 p-2 w-full border rounded-md dark:text-white text-slate-900'
                                    disabled  // Disable the input field
                                    onChange={handleChange}
                                />


                                <div className="mb-4">
                                    <label htmlFor="priceRange" className="block text-sm font-semibold leading-8 mt-4 mb-2 text-gray-700 dark:text-white">
                                        Price Range
                                    </label>
                                    <Slider
                                        range
                                        max={9999}
                                        step={1}
                                        value={requirementsForProject.priceRange}
                                        onChange={handlePriceChange}
                                    />
                                    <p className="dark:text-white text-slate-900">
                                        Selected Price Range: ₹{requirementsForProject.priceRange[0]} - ₹{requirementsForProject.priceRange[1]}
                                    </p>
                                </div>


                                <div className="flex justify-center">
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
            {/* )
                    :
                    (
                        <LoginFirstPage />
                    )
            } */}
        </>
    );
};

export default ProjectBuilding;

