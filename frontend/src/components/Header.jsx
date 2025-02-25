import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/tourism logo.jpg"
import "../styles/Header.css";  // Ensure the styles are here

function Header({ setShowAbout }) {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleToggleLogin = () => setIsLoginVisible(!isLoginVisible);

  return (
    <header className="header">
      <Link to ="/"className="header-logo-link">
      <img src={logo}alt="Logo"className="header-logo"/>
      </Link>
  
        {/*title */}
        <ul className="header-menu-left">
        <li><h1>Ethiopian Ministry of Tourism</h1>
        </li>
        <li><h1>Report Management System</h1>
      </li>
      </ul>
      
      <ul className="header-menu-right">
        <li><Link to="about">About</Link>
        </li>
      <div className="header-buttons">
        {/* Group the login and signup buttons */}
        <button className="header-button" onClick={handleToggleLogin}>
          {isLoginVisible ? "Logout" : "Sign Up"}
        </button>
        
        {isLoginVisible && (
          <div className="auth-links">
            <Link to="/login" className="header-button">Login</Link>
            <Link to="/register" className="header-button">Sign Up</Link>
          </div>
        )}
      </div>
      </ul>
    </header>
  );
}

export default Header;
