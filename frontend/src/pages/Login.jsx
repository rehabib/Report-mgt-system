import { Link } from "react-router-dom";
import Form from "../components/Form";

function Login() {
  return (
    <div className="login-container">
      <Form route="/api/token/" method="login" />
    
      
    </div>
  );
}

export default Login;
