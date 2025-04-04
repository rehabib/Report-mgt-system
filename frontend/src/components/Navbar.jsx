import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/tourism logo.jpg"
import "../styles/Navbar.css";  // Ensure the styles are here

function Navbar({ setShowAbout }) {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleToggleLogin = () => setIsLoginVisible(!isLoginVisible);

  return (
    <navbar className="navbar">
      <Link to ="/"className="navbar-logo-link">
      <img src={logo}alt="Logo"className="navbar-logo"/>
      </Link>
  
        {/*title */}
        <ul className="navbar-menu-left">
        <li><h1>Ethiopian Ministry of Tourism</h1>
        </li>
        <li><h1>Report Management System</h1>
      </li>
      </ul>
      
      <ul className="navbar-menu-right">
        <li><Link to="about">About</Link>
        </li>
      <div className="navbar-button">
        {/* Group the login and signup buttons */}
        <button className="navbar-button" onClick={handleToggleLogin}>
          {isLoginVisible ? "Logout" : "Sign Up"}
        </button>
        
        {isLoginVisible && (
          <div className="auth-links">
            <Link to="/login" className="navbar-button">Login</Link>
            <Link to="/register" className="navbar-button">Sign Up</Link>
          </div>
        )}
      </div>
      </ul>
      
      
    </navbar>
  );
}

export default Navbar;
