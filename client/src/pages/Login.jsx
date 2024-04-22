import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoginImg from '../images/login.png';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import spineer from '../assets/spinner.gif';
import { Link } from 'react-router-dom';

const Login = () => {
    const URL = "https://skill-ez-backend.vercel.app/api/auth/login";
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [loading, setLoading] = useState(false);

    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });

            const res_data = await response.json();
            if (response.ok) {
                toast.success("Login Successful");
                storeTokenInLS(res_data.token);

                setUser({
                    email: '',
                    password: ''
                });

                window.location.replace("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        } catch (error) {
            console.log("Login error", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full bg-[#EEF5FF] dark:bg-slate-900 duration-300">
            <div className="max-w-[1290px] mx-auto flex items-center justify-center h-[840px] md:h-screen text-white px-2 pt-46">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="login-image">
                        <img src={LoginImg} alt="user is login" className="w-full h-auto" />
                    </div>
                    <div className="login-form">
                        <h1 className="text-3xl md:text-5xl font-bold mb-3 font-karla px-0 text-blue-500">Login Form</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-bold text-slate-900 font-monts dark:text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={user.email}
                                    required
                                    onChange={handleInput}
                                    className="mt-1 p-2 w-full border rounded-md text-black"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-bold text-slate-900 font-monts dark:text-white">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={user.password}
                                        required
                                        onChange={handleInput}
                                        className="mt-1 p-2 w-full border rounded-md text-black"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-2 top-4 text-gray-600"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                                >
                                    {loading ? (
                                        <img src={spineer} alt="Loading" className="mx-auto w-[33px]" />
                                    ) : (
                                        'Log In'
                                    )}
                                </button>
                            </div>

                            <div>
                                <p className='text-center'> <Link to="/password-reset" className='text-blue-500'>Forgot Password?</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
