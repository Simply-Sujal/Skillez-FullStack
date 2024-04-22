import React, { useState, useEffect } from 'react';
import { CiLocationOn, CiFolderOn, CiStopwatch } from "react-icons/ci";
import { BsBuildings } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import Infinity from '../assets/Infinity.gif';

const JobFilter = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedJobRole, setSelectedJobRole] = useState("");
    const [selectedJobType, setSelectedJobType] = useState("");
    const [selectedJobOpeningCompany, setSelectedJobOpeningCompany] = useState("");
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            setLoader(false);
            const response = await fetch('https://skill-ez-backend.vercel.app/api/portal/jobs'); // Assuming this is your API endpoint
            const data = await response.json();
            setJobs(data);
            setFilteredJobs(data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoader(true); // Set loader to false regardless of success or failure
        }
    };

    const filterJobs = () => {
        const filtered = jobs.filter(job => {
            return (
                (selectedLocation === "" || job.Location === selectedLocation) &&
                (selectedJobRole === "" || job.Role === selectedJobRole) &&
                (selectedJobType === "" || job.JobType === selectedJobType) &&
                (selectedJobOpeningCompany === "" || job.Company === selectedJobOpeningCompany)
            );
        });
        setFilteredJobs(filtered);
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleJobRoleChange = (e) => {
        setSelectedJobRole(e.target.value);
    };

    const handleJobTypeChange = (e) => {
        setSelectedJobType(e.target.value);
    };

    const handleJobOpeningCompanyChange = (e) => {
        setSelectedJobOpeningCompany(e.target.value);
    };

    useEffect(() => {
        filterJobs();
    }, [selectedLocation, selectedJobRole, selectedJobType, selectedJobOpeningCompany]);

    return (
        <section className='w-full bg-[#EEF5FF] dark:bg-gray-800 py-8'>
            <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-5 md:gap-20 p-1'>
                <div className='w-full lg:w-1/3 flex flex-col gap-4 dark:text-white text-black'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="location" className='text-lg'>Location</label>
                        <select className='w-full px-3 py-2 rounded border text-black dark:border-gray-600 focus:outline-none' id="location" value={selectedLocation} onChange={handleLocationChange}>
                            <option value="">All Location</option>
                            {["Bangalore", "Hyderabad", "Pune", "Chennai", "Mumbai", "Gurgaon", "Noida", "Delhi", "Kolkata", "Ahmedabad"].map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="jobOpeningCompany" className='text-lg'>Job Opening Company</label>
                        <select className='w-full px-3 py-2 rounded border text-black dark:border-gray-600 focus:outline-none' id="jobOpeningCompany" value={selectedJobOpeningCompany} onChange={handleJobOpeningCompanyChange}>
                            <option value="">All Company</option>
                            {["Microsoft", "Amazon", "Apple", "Facebook", "Google"].map((company, index) => (
                                <option key={index} value={company}>{company}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="jobRole" className='text-lg'>Job Role</label>
                        <select className='w-full px-3 py-2 rounded border text-black dark:border-gray-600 focus:outline-none' id="jobRole" value={selectedJobRole} onChange={handleJobRoleChange}>
                            <option value="">All Roles</option>
                            {["Software Developer", "Software Engineer", "Data Analyst", "Analyst Engineer", "Consultant"].map((role, index) => (
                                <option key={index} value={role}>{role}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="jobType" className='text-lg'>Job Type</label>
                        <select className='w-full px-3 py-2 rounded border text-black dark:border-gray-600 focus:outline-none' id="jobType" value={selectedJobType} onChange={handleJobTypeChange}>
                            <option value="">All Job Types</option>
                            {["FullTime", "Internship"].map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {loader ? (
                    <div className='w-full lg:w-2/3 mt-2 md:mt-8 lg:mt-6'>
                        {/* Render filtered jobs */}
                        {filteredJobs.map(job => (
                            <div key={job._id} className='flex flex-col p-4 mt-4  hover:dark:bg-slate-900 hover:bg-white transition-all duration-300 hover:shadow-md'>
                                <div className='flex items-center justify-between gap-[2px]'>
                                    <p className='text-[18px] font-monts font-bold dark:text-white text-black'>{job.Role}</p>
                                    <div className='pl-2 flex items-center gap-[5px] dark:text-white text-black'>
                                        <BsBuildings className='text-[17px] dark:text-gray-500 font-light' />
                                        <h1 className='pb-[2px] font-bold text-blue-500 font-monts'>{job.Company}</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 dark:text-white text-black pt-1'>
                                    <div className='flex gap-2'>
                                        <div className='flex items-center gap-[3px]'>
                                            <CiLocationOn className='text-[20px] dark:text-gray-500' />
                                            <h1 className='pb-[2px] font-bold font-monts'>{job.Location}</h1>
                                        </div>
                                        {/* <div className='flex items-center gap-[3px]'>
                                        <CiFolderOn className='text-[20px] dark:text-gray-500' />
                                        <h1 className='pb-[2px] font-bold font-monts'>{job.Role}</h1>
                                    </div> */}
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className='flex items-center gap-[3px]'>
                                            <CiStopwatch className='text-[22px] dark:text-gray-500' />
                                            <h1 className='pb-[2px] font-bold font-monts'>{job.JobType}</h1>
                                        </div>
                                        <div className='flex items-center gap-[3px]'>
                                            <VscCalendar className='text-[19px] dark:text-gray-500' />
                                            <h1 className='pb-[2px] font-bold font-monts'>{job.AnnoucementDate}</h1>
                                        </div>
                                    </div>
                                </div>
                                <p className='pt-2 text-[13px] md:text-[15px] font-monts dark:text-white text-black'>{job.JobDescription}</p>

                                <Link to={`/internship/${job.Role.replace(/\s+/g, "-")}`} className="bg-blue-500 text-white py-2 px-4 rounded mt-2 text-center  ">Apply Now</Link>
                            </div>
                        )).reverse()}
                    </div>) :
                    (
                        <img src={Infinity} alt="loader" className=" mx-auto " style={{ backgroundColor: 'transparent' }} />
                    )
                }
            </div>
        </section>
    );
};

export default JobFilter;
