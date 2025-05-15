// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/agency/login">Agency Login</Link>
        </li>
        <li>
          <Link to="/agency-plan">Agency Plan</Link>
        </li>
        <li>
          <Link to="/director/login">Director Login</Link>
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
