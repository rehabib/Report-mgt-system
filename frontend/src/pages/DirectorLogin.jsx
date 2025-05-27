import React from 'react';
import Form from '../components/Form';
function DirectorLogin() {
  return (
   <div className="login-container">
    <Form route="/api/token/"method="director-login"/>
</div>
);}
export default DirectorLogin;
        