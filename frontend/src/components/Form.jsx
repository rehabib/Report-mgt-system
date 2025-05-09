import { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom"; // Add Link here
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");  // Updated from username → email
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password }); // Send email instead of username
            
            if (method === "login") {
                console.log("Login Response:", res.data);
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/home");
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error);
            alert(error.response?.data?.detail || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            
            {/* Username Field */}
            <label className="form-label">Username</label>
            <input
                className="form-input"
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
            />

            {/* Password Field */}
            <label className="form-label">Password</label>
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
            />

            {/* Forgot Password */}
            {method === "login" && (
                <div className="auth-options">
                    <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
                </div>
            )}

            {/* Submit Button */}
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>

            {/* Switch between Login/Register */}
            <div className="auth-options">
                {method === "login" ? (
                    <Link to="/register" className="auth-link">Don't have an account? Sign Up</Link>
                ) : (
                    <Link to="/login" className="auth-link">Already have an account? Login</Link>
                )}
            </div>
        </form>
    );
}

export default Form;
