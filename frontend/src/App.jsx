// src/App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage       from "./pages/Landingpage";
import Reports           from "./pages/Reports";
import AgencyLogin       from "./pages/AgencyLogin";
import DirectorLogin     from "./pages/DirectorLogin";
import Register          from "./pages/Register";
import NotFound          from "./pages/NotFound";

import Layout            from "./components/Layout";
import ProtectedRoute    from "./components/ProtectedRoute";
import AgencyPlanModal   from "./components/AgencyPlanModal";
import DirectorPlanModal from "./components/DirectorPlanModal";

import "./App.css";



const Logout = () => {
  localStorage.clear();
  return <Navigate to="/login" replace />;
};

const RegisterAndLogout = () => {
  localStorage.clear();
  return <Register />;
};



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ───────── Public landing ───────── */}
        <Route path="/" element={<LandingPage />} />

        {/* ───────── Shell (Navbar + Sidebar + Footer) ───────── */}
        <Route element={<Layout />}>
          {/* dashboard */}
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />

          {/* plan pages */}
          <Route
            path="agency-plan"
            element={
              <ProtectedRoute>
                <AgencyPlanModal />
              </ProtectedRoute>
            }
          />
          <Route
            path="director-plan"
            element={
              <ProtectedRoute>
                <DirectorPlanModal />
              </ProtectedRoute>
            }
          />

          {/* auth pages INSIDE the shell (remove if you want them outside) */}
          <Route path="login"          element={<AgencyLogin />} />
          <Route path="director-login" element={<DirectorLogin />} />
        </Route>

        {/* ───────── misc / auth OUTSIDE shell ───────── */}
        {/* (keep these only if you want a bare-bones login screen) */}
        {/* <Route path="/login"          element={<AgencyLogin />} /> */}
        {/* <Route path="/director-login" element={<DirectorLogin />} /> */}

        <Route path="/logout"   element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />

        {/* ───────── 404 fallback ───────── */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
