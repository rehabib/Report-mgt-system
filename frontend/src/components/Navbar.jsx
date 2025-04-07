import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/tourism logo.jpg";
import "../styles/Navbar.css";
import { Modal, Button } from "react-bootstrap"; // <-- Import from Bootstrap

function Navbar() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const navigate = useNavigate();

  const handleToggleLogin = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); // Redirect to login
  };

  const handleAboutOpen = () => setShowAboutModal(true);
  const handleAboutClose = () => setShowAboutModal(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        <ul className="navbar-menu-left">
          <li><h1>Ethiopian Ministry of Tourism</h1></li>
          <li><h1>Report Management System</h1></li>
        </ul>

        <ul className="navbar-menu-right">
          <li>
            <button className="navbar-button" onClick={handleAboutOpen}>
              About
            </button>
          </li>

          <li className="auth-dropdown-container">
            <button className="navbar-button" onClick={handleToggleLogin}>
              SignOut
            </button>
            {isLoginVisible && (
              <div className="auth-links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/">Logout</Link>
               
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* About Modal */}
      <Modal show={showAboutModal} onHide={handleAboutClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>About Report Management System</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This system is developed for the Ethiopian Ministry of Tourism to track,
            plan, and evaluate reports using a Balanced Scorecard approach.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAboutClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbar;
