import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import spinner from '../assets/spinner.gif';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const sendLink = async (e) => {
    e.preventDefault();

    if (email === '') {
      toast.error('Email is required!');
    } else if (!email.includes('@')) {
      toast.warning('Include @ in your email!');
    } else {
      try {
        setLoading(true); // Start the loader

        const res = await fetch('https://skill-ez-backend.vercel.app/api/forgotpassword/sendpasswordlink', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (data.status === 201) {
          setEmail('');
          setMessage('New Password has been sent successfully to your email.');
          toast.success('New Password sent successfully to your email!');
          navigate('/login');

        } else {
          toast.error('Invalid User');
        }
      } catch (error) {
        console.error('Error sending password reset link:', error);
        toast.error('Error sending new password');
      } finally {
        setLoading(false); // Stop the loader
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#EEF5FF] dark:bg-slate-900 duration-300">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-slate-800 duration-300">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Password Reset</h1>
        </div>

        {message && (
          <p className="text-green-700 font-semibold mb-4">{message}</p>
        )}

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={setVal}
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
              className="w-full p-3 border rounded font-monts font-semibold focus:outline-none focus:border-blue-500 dark:bg-slate-100"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              onClick={sendLink}
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <img src={spinner} alt="Loading" className="mx-auto w-[33px]" />
              ) : (
                'Send'
              )}
            </button>
          </div>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default PasswordReset;