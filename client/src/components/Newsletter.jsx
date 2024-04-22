import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Fade } from 'react-reveal';


const Newsletter = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    }
    const [user, setUser] = useState({
        email: ""
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://skill-ez-backend.vercel.app/api/newsletter/sendemail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })

            const res_data = await response.json();
            console.log(res_data)
            if (response.ok) {
                toast.success("Email sent successfully");
                setUser({
                    email: '',
                });
            } else {
                toast.error("Email not sent")
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <section class="bg-[#eef5ff] dark:bg-gray-900">
                <Fade duration={1000} distance="30px" bottom>
                    <div class=" mx-auto max-w-screen-xl py-10 md:py-16 px-5 md:px-10">
                        <div class="mx-auto max-w-screen-md sm:text-center">
                            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white"><span className='text-blue-500'>Sign up</span> for our newsletter</h2>
                            <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                                Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                            <form onSubmit={handleSubmit}>
                                <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div class="relative w-full">
                                        <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                        <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" name='email' value={user.email} id="email" onChange={handleInput} required />
                                    </div>
                                    <div>
                                        <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-slate-800 dark:text-white rounded-lg border cursor-pointer bg-primary-300  dark:bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                    </div>
                                </div>
                                <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <Link onClick={handleClick} to='/privacypolicy' class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</Link>.</div>
                            </form>
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    )
}

export default Newsletter
