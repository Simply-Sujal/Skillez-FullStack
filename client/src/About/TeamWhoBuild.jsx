import React from 'react'
import SujalDp from '../assets/sujal.jpg'
import BibasTimilsina from '../../public/BibasTimilsina.jpeg'
import SagarAcharya from '../../public/SagarAcharya.jpg'
import PiyushSingh from '../../public/Piyush.jpg'
import SurajPathak from '../../public/Suraj Pathak.jpg'
import sudeep from '../assets/sudeepimg.jpg'
import { FaLinkedin } from "react-icons/fa";
import { Fade } from 'react-reveal';


const TeamWhoBuild = () => {
    return (
        <div>
            <Fade duration={1000} distance="30px" bottom>
                <section className="w-full bg-[#eef5ff] dark:bg-slate-900 duration-300">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">

                        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                            <h1 className='text-3xl md:text-5xl text-center font-karla font-semibold dark:text-white text-slate-900'>Team <span className='text-blue-500'>Who Build</span></h1>
                            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Our team transforms visions into seamless web experiences</p>
                        </div>

                        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            <div class="text-center text-gray-500 dark:text-gray-400">
                                <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={SujalDp} alt="Bonnie Avatar" />
                                <h3 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Sujal Timilsina</a>
                                </h3>
                                <p>CEO/Co-founder</p>
                                <p>UnderGrad</p>
                                <ul class="flex justify-center mt-4 space-x-4">
                                    <li>
                                        <a href="https://www.linkedin.com/in/sujal-timilsina-a26299197/" target='_blank' class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                            <FaLinkedin className='text-2xl' />
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <div class="text-center text-gray-500 dark:text-gray-400">
                                <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={PiyushSingh} alt="Helene Avatar" />
                                <h3 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Piyush kr. Singh</a>
                                </h3>
                                <p>Senior Developer</p>
                                <p>UnderGrad</p>
                                <ul class="flex justify-center mt-4 space-x-4">
                                    <li>
                                        <a href="https://www.linkedin.com/in/piyush-kumar-singh-902036248/" target='_blank' class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                            <FaLinkedin className='text-2xl' />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="text-center text-gray-500 dark:text-gray-400">
                                <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/004/899/833/small/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg" alt="Helene Avatar" />
                                <h3 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Tanisha Singh</a>
                                </h3>
                                <p>SEO</p>
                                <p>UnderGrad</p>
                                <ul class="flex justify-center mt-4 space-x-4">
                                    <li>
                                        <a href="https://www.linkedin.com/in/tanisha22/" target='_blank' class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                            <FaLinkedin className='text-2xl' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default TeamWhoBuild
