// src/pages/AgencyLogin.jsx
import { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";

export default function AgencyLogin() {
  const [departments, setDepartments] = useState([]);
  const [deptId, setDeptId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/api/department/").then(res => setDepartments(res.data));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // First register or ensure user has a profile with department:
      // If agency users already exist, skip register and go straight to login.
      const payload = { username, password, department_id: selectedDept };
      const res = await api.post("/api/token/", payload);
      const tokenRes = await api.post("/api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, tokenRes.data.access);
      localStorage.setItem(REFRESH_TOKEN, tokenRes.data.refresh);

      // Save selected department in localStorage so your plan component knows it
      localStorage.setItem("department_id", deptId);
      navigate("/agency-plan");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Agency Login</h1>

      <label>Department</label>
      <select
        value={deptId}
        onChange={e => setDeptId(e.target.value)}
        required
      >
        <option value="">Select Department</option>
        {departments.map(d => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>

      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button type="submit" className="form-button" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
