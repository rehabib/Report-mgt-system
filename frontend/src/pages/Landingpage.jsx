import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleOpenClick = () => {
    navigate("/login");  // This will navigate to the Login page initially
  };

  return (
    <div className="landing-container">
      <h1>BSC Report Management System</h1>
      <p>Ministry of Tourism</p>
      <button className="open-button" onClick={handleOpenClick}>Open</button>
    </div>
  );
}

export default LandingPage;
