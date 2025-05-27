import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleOpenClick = () => {
    navigate("/home");  // This will navigate to the protected dashboard
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
