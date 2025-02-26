import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Reports from "./pages/Reports";
import LandingPage from "./pages/Landingpage"; 
import "./App.css";


function Logout(){
  localStorage.clear()
  return<Navigate to ="/login"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return<Register/>
}
function App() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected Dashboard Page (Requires Login) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <div className="layout">
                <Navbar setShowAbout={setShowAbout} />
                <div className="main-container">
                  <Sidebar />
                  <main className="content">
                    <div className="report-container">
                      <Reports />
                    </div>
                  </main> 
                </div>
                <Footer />
              </div>
            </ProtectedRoute>
          }
        />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
