import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/LoadingIndicator"; // Use a proper loader

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if (!refreshToken) {
            setIsAuthorized(false);
            return;
        }

        try {
            const res = await api.post("/api/token/refresh/", { username:username,passowrd:password});
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.error("Error refreshing token:", error);
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        try {
            const token = localStorage.getItem(ACCESS_TOKEN);
            if (!token) {
                setIsAuthorized(false);
                return;
            }

            const decoded = jwtDecode(token);
            const tokenExpiration = decoded.exp;
            const now = Date.now() / 1000;

          

            if (tokenExpiration < now) {
                await refreshToken();
            } else {
                setIsAuthorized(true);
            }
        } catch (error) {
            console.error("Auth error:", error);
            setIsAuthorized(false);
        }
    };

    useEffect(() => {
        (async () => {
            await auth();
        })();
    }, []);

    if (isAuthorized === null) {
        return <LoadingIndicator />;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;


export const register=async()=>{
    const {username,password}=req.body;
    try {
        if(!password || username){
            res.status(400).json("pass or usrtname ");
            if(User.find(username)){
                res.status(400).json("user exist");
            }
        }
        username({usernam,password});
        user.save();
        res.sttus(200).json(user)
    
    } catch (error) {
        
    }

}