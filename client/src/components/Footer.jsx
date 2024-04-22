import React from 'react'
import { FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import name from '../assets/name.png'
import skillexlogo from '../assets/skillezlogo.png'

const Footer = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div>
            <footer class="bg-[#eef5ff] dark:bg-gray-900 border-t-[1px] border-slate-600">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <Link href="www.skillez.in" class="flex items-center">
                                <img src={skillexlogo} className="h-20 w-20 me-3 rounded-full" alt="SkillEz Logo" />
                                <span class="self-center text-2xl md:text-5xl font-semibold whitespace-nowrap  text-blue-500 dark:text-blue-500">SkillEz</span>
                            </Link>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pages</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4 hover:underline">
                                        <Link onClick={handleClick} to='/service'>Find Service</Link>
                                    </li>
                                    <li className='mb-4 hover:underline'>
                                        <Link onClick={handleClick} to='/about'>About Us</Link>
                                    </li>

                                    <li className='mb-4 hover:underline'>
                                        <Link onClick={handleClick} to='/contact'>Contact Us</Link>
                                    </li>

                                    <li className='mb-4 hover:underline'>
                                        <Link onClick={handleClick} to='/internship'>Jobs & Intership</Link>
                                    </li>

                                    <li className='mb-4 hover:underline'>
                                        <Link onClick={handleClick} to='/event'>Join Events</Link>
                                    </li>

                                    <li className='hover:underline'>
                                        <Link onClick={handleClick} to='/blog'>Blog Writing</Link>
                                    </li>

                                </ul>
                            </div>

                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Inside SkillEz</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link to='/projectinfo' onClick={handleClick} class="hover:underline">Website Building</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to='/resumebuildinginfo' onClick={handleClick} class="hover:underline">Resume Building</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to='/resumereviewinfo' onClick={handleClick} class="hover:underline">Resume Review</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to='/mockinterviewinfo' onClick={handleClick} class="hover:underline">Mock Interview</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to='/linkedinInfo' onClick={handleClick} class="hover:underline">Linkedin Setup</Link>
                                    </li>

                                </ul>
                            </div>

                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">My Account</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link onClick={handleClick} to='/register' class="hover:underline">Register</Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link onClick={handleClick} to='/login' class="hover:underline">Login</Link>
                                    </li>
                                </ul>
                            </div>


                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link onClick={handleClick} to='/privacypolicy' class="hover:underline">Privacy Policy</Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link onClick={handleClick} to='/termsandcondition' class="hover:underline">Terms &amp; Conditions</Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleClick} to='/disclaimer' class="hover:underline">Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to='/' class="hover:underline" onClick={handleClick}>SkillEz</Link>. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/profile.php?id=61556336708954" class="text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank">
                                <FaFacebook className='text-2xl' />
                                <span class="sr-only">Facebook page</span>
                            </a>

                            <a href="https://chat.whatsapp.com/IXfVngloRkLFGzI187EKUC" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaWhatsapp className='text-2xl' />
                                <span class="sr-only">Whatsapp page</span>
                            </a>

                            <a href="https://www.linkedin.com/company/skillez/" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaLinkedin className='text-2xl' />
                                <span class="sr-only">LinkedIn page</span>
                            </a>

                            {/* <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaTwitter className='text-2xl' />
                                <span class="sr-only">Twitter page</span>
                            </a> */}

                            <a href="https://www.instagram.com/skillez_com/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target="_blank">
                                <FaInstagram className='text-2xl' />
                                <span class="sr-only">Instagram page</span>
                            </a>

                        </div>
                    </div>
                </div>
            </footer>

            <div className="bg-[#eef5ff] dark:bg-gray-900 text-center flex-grow flex items-center justify-center">
                <img src={name} alt="" className='w-[1270px]' />
            </div>

        </div>
    )
}

export default Footer
