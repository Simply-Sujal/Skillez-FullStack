import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';
import { useAuth } from '../store/auth';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
    const [openReachouts, setOpenReachouts] = useState(false);
    const [openMore, setOpenMore] = useState(false);
    const [showDiscount, setShowDiscount] = useState(true);
    const dropdownRef1 = useRef(null);
    const dropdownRef2 = useRef(null);

    const handleLinkedInClick = () => {
        window.scrollTo(0, 0);

    };

    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef1.current && !dropdownRef1.current.contains(event.target) &&
                dropdownRef2.current && !dropdownRef2.current.contains(event.target)
            ) {
                setOpenReachouts(false);
                setOpenMore(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleReachoutsDropdown = () => {
        setOpenReachouts(!openReachouts);
        setOpenMore(false); // Close the 'More' dropdown
    };

    const toggleMoreDropdown = () => {
        setOpenMore(!openMore);
        setOpenReachouts(false); // Close the 'Reachouts' dropdown
    };

    const closeDropdowns = () => {
        setOpenReachouts(false);
        setOpenMore(false);
    };

    const handleCloseDiscount = () => {
        setShowDiscount(false);
    };

    return (
        <>
            {showDiscount && (
                <div className="w-full bg-blue-500 py-[7px] fixed top-0 z-20">
                    <h1 className="text-bold text-center text-white font-monts text-[10px] md:text-[11px] tracking-wider">Discover our thrilling 50% discount across all services!🎉</h1>
                    <CgClose onClick={handleCloseDiscount} className="text-white text-[15px] md:text-1xl absolute top-2 right-2 cursor-pointer" />
                </div>
            )}
            <div className={`w-full h-[60px] bg-[#EEF5FF] dark:bg-slate-900 shadow-lg dark:border-b-2 border-slate-100 dark:border-slate-800 p-4 z-10 fixed ${showDiscount ? "top-7" : "top-0"} left-0 right-0 duration-300 opacity-100 md:opacity-90`}>
                <nav className='max-w-[1290px] mx-auto flex justify-between items-center h-full'>
                    <Link to="/" onClick={handleLinkedInClick}>
                        <h1 className='text-2xl font-semibold cursor-pointer sm:text-4xl text-blue-500'>
                            SkillEz
                        </h1>
                    </Link>

                    <ul className='md:flex hidden items-center gap-10 py-4'>
                        <li className='text-[18px] dark:text-white dark:hover:text-violet-500 hover:text-violet-600 text-black hover:border-b-2 border-violet-500 '>
                            <Link to="/" onClick={handleLinkedInClick}>Home</Link>
                        </li>
                        <li className='text-[18px] dark:text-white dark:hover:text-violet-500 hover:text-violet-600 text-black hover:border-b-2 border-violet-500 '>
                            <Link to="/about" onClick={handleLinkedInClick}>About</Link>
                        </li>

                        <li className='text-[18px] dark:text-white dark:hover:text-violet-500 hover:text-violet-600 text-black hover:border-b-2 border-violet-500 '>
                            <Link to="/service" onClick={handleLinkedInClick}>Service</Link>
                        </li>


                        <li className='relative' ref={dropdownRef2}>
                            <span
                                className='text-[18px] dark:text-white dark:hover:text-violet-500 hover:text-violet-600 text-black hover:border-b-2 border-violet-500 cursor-pointer'
                                onClick={toggleMoreDropdown}
                            >
                                More
                            </span>
                            <ul className={`absolute top-full left-0 w-48 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 shadow-md rounded-md mt-2 ${openMore ? 'block' : 'hidden'}`}>
                                <li><Link to="/event" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeDropdowns}>Events</Link></li>
                                <li><Link to="/internship" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeDropdowns}>Internships</Link></li>
                                <li><Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeDropdowns}>Blogs</Link></li>
                            </ul>
                        </li>

                        {/* Dropdown Menu for Reachouts */}
                        <li className='relative' ref={dropdownRef1}>
                            <span
                                className='text-[18px] dark:text-white dark:hover:text-violet-500 hover:text-violet-600 text-black hover:border-b-2 border-violet-500 cursor-pointer'
                                onClick={toggleReachoutsDropdown}
                            >
                                Reachouts
                            </span>
                            <ul className={`absolute top-full left-0 w-48 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 shadow-md rounded-md mt-2 ${openReachouts ? 'block' : 'hidden'}`}>
                                {/* <li><Link to="/about" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeDropdowns}>About</Link></li> */}
                                <li><Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeDropdowns}>Contact</Link></li>
                                {
                                    isLoggedIn ?
                                        null
                                        :
                                        <>
                                            <li><Link to="/sendotp" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeDropdowns}>Register</Link></li>
                                            <li><Link to="/login" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeDropdowns}>Login</Link></li>
                                        </>
                                }
                            </ul>
                        </li>

                        <li className='cursor-pointer hidden md:block'><DarkMode /></li>
                    </ul>


                    <ul className={`fixed top-0 z-50 bg-[#EEF5FF] dark:bg-slate-900 w-2/3 h-screen shadow-2xl md:hidden flex flex-col gap-8 text-lg p-7 pt-10 duration-300
                ${openReachouts || openMore ? 'right-0' : 'right-[-100%]'}`}>
                        <li className='cursor-pointer absolute top-[11%]'><DarkMode /></li>
                        <li className='text-[17px] dark:text-violet-500 text-black mt-16'>
                            <Link to="/" onClick={handleLinkedInClick}>Home</Link>
                        </li>
                        <li className='text-[17px] dark:text-violet-500 text-black'>
                            <Link to="/about" onClick={handleLinkedInClick}>About</Link>
                        </li>
                        <li className='text-[17px] dark:text-violet-500 text-black'>
                            <Link to="/service" onClick={handleLinkedInClick}>Service</Link>
                        </li>
                        <li className='text-[17px] dark:text-violet-500 text-black'>
                            <Link to="/event" onClick={handleLinkedInClick}>Events</Link>
                        </li>
                        <li className='text-[17px] dark:text-violet-500 text-black'>
                            <Link to="/internship" onClick={handleLinkedInClick}>Internships</Link>
                        </li>
                        <li className='text-[17px] dark:text-violet-500 text-black'>
                            <Link to="/blog" onClick={handleLinkedInClick}>Blogs</Link>
                        </li>
                        <li className='text-[17px] dark:text-violet-500 text-black'>
                            <Link to="/contact" onClick={handleLinkedInClick}>Contact</Link>
                        </li>
                        {
                            isLoggedIn ?
                                <li className='text-[17px] dark:text-violet-500 text-black'>
                                    <Link to="/logout" onClick={handleLinkedInClick}>Logout</Link>
                                </li>
                                :
                                <>
                                    <li className='text-[17px] dark:text-violet-500 text-black'>
                                        <Link to="/sendotp" onClick={handleLinkedInClick}>Register</Link>
                                    </li>
                                    <li className='text-[17px] dark:text-violet-500 text-black'>
                                        <Link to="/login" onClick={handleLinkedInClick}>Login</Link>
                                    </li>
                                </>
                        }
                    </ul>


                    {
                        openReachouts || openMore ? <CgClose onClick={closeDropdowns} className='text-black dark:text-white text-2xl md:hidden z-50 cursor-pointer' />
                            :
                            <HiOutlineMenuAlt1 onClick={toggleReachoutsDropdown} className='text-black dark:text-white text-2xl md:hidden z-50 cursor-pointer ' />
                    }

                </nav>
            </div>
        </>
    );
};

export default Navbar;
