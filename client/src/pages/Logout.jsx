import React, { useEffect } from 'react';
import { useAuth } from '../store/auth';

const Logout = () => {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        const handleLogout = async () => {
            await LogoutUser();
            // Redirect to home page and reload the page
            window.location.replace('/');
        };

        handleLogout();
    }, [LogoutUser]);

    // Render null, as the redirection and reload will happen in useEffect
    return null;
};

export default Logout;
