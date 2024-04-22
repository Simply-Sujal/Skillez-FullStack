import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import spinner from '../assets/spinner.gif';

const SendOtp = () => {
    const sendOtpURL = "https://skill-ez-backend.vercel.app/api/auth/sendotp";
    const verifyOtpURL = "https://skill-ez-backend.vercel.app/api/auth/verifyotp";

    // Retrieve email from the location state
    const location = useLocation();
    const emailFromRegistration = location.state?.email || '';

    const [email, setEmail] = useState(emailFromRegistration);
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const navigate = useNavigate();

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const handleOtpInput = (e) => {
        setOtp(e.target.value);
    };

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(sendOtpURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                toast.success("OTP sent successfully. Check your email.");
            } else {
                const data = await response.json();
                toast.error(data.error || "Failed to send OTP");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading2(true);

        try {
            const response = await fetch(verifyOtpURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, otp }),
            });

            if (response.ok) {
                toast.success("Email verified successfully.");
                navigate("/register", { state: { email } }); // Redirect to registration page with email
            } else {
                const data = await response.json();
                toast.error(data.error || "Failed to verify OTP");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
        } finally {
            setLoading2(false);
        }
    };

    return (

        <div className="bg-blue-100 dark:bg-slate-900 duration-300 h-screen flex flex-col justify-start md:justify-center items-center text-black dark:text-white">
            <div className="max-w-[600px] p-8 bg-white dark:bg-slate-800 rounded-md shadow-md duration-300 md:mt-1 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Verify Your Email</h1>

                {/* Send OTP Form */}
                <form className="mb-8">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Entered registered email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            id="email"
                            autoComplete="off"
                            value={email}
                            onChange={handleEmailInput}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900"
                        />
                    </div>

                    <div>
                        <button
                            onClick={handleSendOtp}
                            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            {loading ? (
                                <img src={spinner} alt="Loading" className="mx-auto w-6 h-6 animate-spin" />
                            ) : (
                                'Send OTP'
                            )}
                        </button>
                    </div>
                </form>

                {/* Verify OTP Form */}
                <form onSubmit={handleVerifyOtp}>
                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-sm font-medium">
                            Enter the OTP sent to your email:
                        </label>
                        <input
                            type="text"
                            name="otp"
                            placeholder="Enter OTP"
                            required
                            id="otp"
                            autoComplete="off"
                            value={otp}
                            onChange={handleOtpInput}
                            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            {loading2 ? (
                                <img src={spinner} alt="Loading" className="mx-auto w-6 h-6 animate-spin" />
                            ) : (
                                'Verify OTP'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SendOtp;
