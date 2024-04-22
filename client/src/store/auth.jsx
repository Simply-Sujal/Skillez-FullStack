import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

// this is context
export const AuthContext = createContext();

// this is provider
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const authorizationToken = `Bearer ${token}`;


    // const API = import.meta.env.VITE_APP_URI_API


    // storing the token in localstorage
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }

    const isLoggedIn = !!token;

    //logout functionalty 
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    // JWT AUTHENTICATION - TO GET THE CURRENTLY LOGGEDIN USER DATA 
    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://skill-ez-backend.vercel.app/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            })
            if (response.ok) {
                const data = await response.json();
                // console.log("user data", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.log("Error in fetechin user deatils");
        }
    }

    // to fetch the services data from the database 
    const getServices = async () => {
        try {
            const response = await fetch("https://skill-ez-backend.vercel.app/api/data/service", {
                method: "GET"
            })
            if (response.ok) {
                const data = await response.json();
                // console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`Services frontend error ${error}`);
        }
    }


    useEffect(() => {
        getServices();
        userAuthentication();
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}