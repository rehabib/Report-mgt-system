import React from "react";
import "../styles/About.css"; // Add your modal styling here

function About({ setShowAbout }) {
  const closeModal = () => {
    setShowAbout(false); // Close the modal when the close button is clicked
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>About tourism report management</h2>
        <p>
          Tourism minister report management. You can write the metrics and generate plan and report.
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default About;
