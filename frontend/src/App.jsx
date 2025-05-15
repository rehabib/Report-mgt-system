import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage     from "./pages/Landingpage";
import Login           from "./pages/Login";
import Register        from "./pages/Register";
import NotFound        from "./pages/NotFound";
import AgencyLogin     from "./pages/AgencyLogin";
import AgencyPlanPage  from "./pages/AgencyPlanPage";
import Reports         from "./pages/Reports";

import Navbar          from "./components/Navbar";
import Sidebar         from "./components/Sidebar";
import Footer          from "./components/Footer";
import ProtectedRoute  from "./components/ProtectedRoute";

import "./App.css";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function HomeLayout() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="layout">
      <Navbar setShowAbout={setShowAbout} />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <Reports />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login"    element={<Login />} />
        <Route path="/logout"   element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/agency/login" element={<AgencyLogin />} />

        {/* Protected: Home dashboard */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeLayout />
            </ProtectedRoute>
          }
        />

        {/* Protected: Agency Plan */}
        <Route
          path="/agency-plan"
          element={
            <ProtectedRoute>
              <AgencyPlanPage />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
