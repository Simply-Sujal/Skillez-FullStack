import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const AdminContacts = () => {
    const [contactData, setContactData] = useState([])
    const { authorizationToken } = useAuth();

    // getting the contact data 
    const getContactsData = async () => {
        try {
            const response = await fetch("https://skill-ez-backend.vercel.app/api/admin/contactadmin", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });
            const data = await response.json()
            console.log("contact data", data);
            if (response.ok) {
                setContactData(data)
            }

        } catch (error) {
            console.log("THE ERROR IS", error)
        }
    }

    // deleting the contact 
    const deleteContactById = async (id) => {
        try {
            const response = await fetch(`https://skill-ez-backend.vercel.app/api/admin/contact/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: authorizationToken
                }
            })
            if (response.ok) {
                getContactsData();
                toast.success("Deleted Successfully");
            } else {
                toast.error("Not Deleted");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getContactsData();
    }, [])

    return (
        <div>
            {" "}
            <h1>Hello Sujal</h1>
            {
                contactData.map((curContactData, index) => {
                    const { username, email, message, _id } = curContactData
                    return (
                        <div key={index}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{message}</p>
                            <button className='bg-slate-300 px-8 py-2' onClick={() => deleteContactById(_id)}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminContacts
