import React from 'react';
import Form from '../components/Form';
function AgencyLogin() {
  return (
   <div className="login-container">
    <Form route="/api/token/"method="login"/>
</div>
);}
export default AgencyLogin;
        