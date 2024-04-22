import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { useAuth } from '../../store/auth';


const AdminLayout = () => {

    const { user, isLoading } = useAuth();
    console.log("admin layout", user)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (!user.isAdmin) {
        return <Navigate to="/" />
    }

    return (
        <>
            <header className=''>
                <li className='list-none'>
                    <NavLink to="/admin/users"><FaUser />Users</NavLink>
                </li>
                <li className='list-none'>
                    <NavLink to="/admin/contacts"><FaMessage />
                        Contacts</NavLink>
                </li>
                <li className='list-none'>
                    <NavLink to="/service"><CiViewList />
                        Service</NavLink>
                </li>
                <li className='list-none'>
                    <NavLink to="/"><FaHome />Home</NavLink>
                </li>

            </header>
            <Outlet />
        </>
    )
}

export default AdminLayout
