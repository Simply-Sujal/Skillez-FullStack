import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value
        })
    }

    // to update the data dynamically
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://skill-ez-backend.vercel.app/api/admin/users/update/${params.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken
                    },
                    body: JSON.stringify(data)
                })
            if (response.ok) {
                toast.success("Updated Successfully");
            } else {
                toast.error("Not Updated");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const params = useParams();
    const { authorizationToken } = useAuth();

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`https://skill-ez-backend.vercel.app/api/admin/users/${params.id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken
                    }
                })
            const data = await response.json();
            console.log("User single data", data);
            setData(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleUserData();
    }, [])

    return (
        <section className='bg-slate-800 text-white h-screen'>
            <div className='max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between pt-10 items-center align-top px-3'>
                <div className='md:mr-8 mb-8 md:mb-0'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-8 relative'>
                        <span className='relative z-10 pb-1'>Update User Data</span>
                        <span className='absolute bottom-0 left-0 w-1/4 h-0.5 bg-purple-500'></span>
                    </h1>
                </div>
                <div className='w-full md:w-[500px] font-monts'>
                    <form onSubmit={handleSubmit} className='space-y-4 pt-4 md:pt-14'>
                        <div>
                            <label htmlFor='username' className='block text-sm font-medium pb-2'>
                                Username
                            </label>
                            <input
                                type='text'
                                name='username'
                                required

                                value={data.username}
                                onChange={handleInput}
                                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 text-[#3C486B]'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium pb-2'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                required

                                value={data.email}
                                onChange={handleInput}
                                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 text-[#3C486B]'
                            />
                        </div>
                        <div>
                            <label htmlFor='phone' className='block text-sm font-medium pb-2'>
                                Mobile
                            </label>
                            <input
                                type='phone'
                                name='phone'
                                required

                                value={data.phone}
                                onChange={handleInput}
                                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 text-[#3C486B]'
                            />

                        </div>

                        <button type='submit' className='bg-purple-500 text-white py-2 px-8 rounded-md hover:bg-purple-600 transition-all'>
                            Update Data
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default AdminUpdate
