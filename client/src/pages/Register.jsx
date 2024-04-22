import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RegistrationImg from '../images/registration.png';
import { toast } from 'react-toastify';
import spinner from '../assets/spinner.gif';
import { useAuth } from '../store/auth';

const Register = () => {
    const registerURL = "https://skill-ez-backend.vercel.app/api/auth/register";
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    // Retrieve email from the location state
    const location = useLocation();
    const emailFromSendOtp = location.state?.email || ''; // Corrected this line

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
        setLoading(true);

        try {
            // Send the registration request without OTP
            const response = await fetch(registerURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...user,
                    email: emailFromSendOtp, // Use the email from SendOtp component
                }),
            });

            const resData = await response.json();

            if (response.ok) {
                // Registration successful
                storeTokenInLS(resData.token);
                setUser({
                    username: '',
                    email: '',
                    phone: '',
                    password: '',
                });

                // Redirect to another page if needed after registration
                navigate("/");
            } else {
                toast.error(resData.extraDetails ? resData.extraDetails : resData.message);
            }
        } catch (error) {
            console.error("Registration error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#EEF5FF] dark:bg-slate-900 duration-300">
            <div className="max-w-[1290px] mx-auto flex items-center justify-center h-screen text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="registration-image">
                        <img src={RegistrationImg} alt="user is registering" className="w-full h-auto" />
                    </div>
                    <div className="registration-form text-slate-900 dark:text-white">
                        <h1 className="text-3xl font-bold mb-3 font-karla px-2 text-blue-500">Registration Form</h1>

                        <form onSubmit={handleSubmit} className="max-w-md">
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-black dark:text-white">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    required
                                    id="username"
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput}
                                    className="mt-1 p-2 w-full border rounded-md text-black"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    id="email"
                                    autoComplete="off"
                                    value={emailFromSendOtp} // Use the email from SendOtp component
                                    disabled
                                    className="mt-1 p-2 w-full border rounded-md text-black"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-white">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone"
                                    required
                                    id="phone"
                                    autoComplete="off"
                                    minLength={10}
                                    maxLength={10}
                                    value={user.phone}
                                    onChange={handleInput}
                                    className="mt-1 p-2 w-full border rounded-md text-black"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-black dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                    id="password"
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                    className="mt-1 p-2 w-full border rounded-md text-black"
                                />
                            </div>

                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                                >
                                    {loading ? (
                                        <img src={spinner} alt="Loading" className="mx-auto w-[33px]" />
                                    ) : (
                                        'Register Now'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;