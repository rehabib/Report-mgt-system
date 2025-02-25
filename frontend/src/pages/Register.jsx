import { Link } from "react-router-dom";
import Form from "../components/Form";

function Register() {
  return (
    <div className="register-container">
      <Form route="/api/user/register/" method="register" />
      
    </div>
  );
}

export default Register;
