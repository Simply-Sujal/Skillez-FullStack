import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("https://skill-ez-backend.vercel.app/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log('users', data);
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");

    if (confirmDelete) {
      try {
        const response = await fetch(`https://skill-ez-backend.vercel.app/api/admin/users/delete/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        });

        const data = await response.json(); // Add await here

        console.log(`Users after delete : ${data}`);

        if (response.ok) {
          getAllUsersData();
        }
      } catch (error) {
        console.error('Error deleting user:', error.message);
      }
    }
  };


  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <div className="container mx-auto my-8 max-w-1120">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Admin Users</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead>
              <tr>
                <th className="border-b p-4">Username</th>
                <th className="border-b p-4">Email</th>
                <th className="border-b p-4">Phone</th>
                <th className="border-b p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.length > 0 ? (
                users.map((curr, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="border-b p-4 text-center">{curr.username}</td>
                    <td className="border-b p-4 text-center">{curr.email}</td>
                    <td className="border-b p-4 text-center">{curr.phone}</td>
                    <td className="border-b p-4 text-center space-x-2">
                      <Link to={`/admin/users/${curr._id}/edit`}><button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button></Link>
                      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => deleteUser(curr._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4">No users available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
