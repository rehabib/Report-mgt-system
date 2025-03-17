import { Link } from "react-router-dom";
import Form from "../components/Form";
import axios from "axios";


function  Register() {
  return (
    <div className="register-container">
      <Form route="/api/user/register/" method="register" />
      
    </div>
  );
}

export default Register;