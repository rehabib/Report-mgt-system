import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      // Call API for password reset
      await api.post("/api/password-reset/", { email });
      alert("Password reset link has been sent to your email.");
      navigate("/login");
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <input
          type="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your Username"
        />
        <button type="submit" disabled={loading}>Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
