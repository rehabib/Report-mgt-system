import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css"; // Assuming you have a separate CSS file for sidebar

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
      <li>
     <Link to="/agency-plan">Agency Plan</Link>
    </li>
    <li>
    <Link to="/director-plan">Director Plan</Link>
    </li>

        <li>
          <Link to="/admin">Administrator</Link>
        </li>
        <li>
          <Link to="/additional-information">Additional Information</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
