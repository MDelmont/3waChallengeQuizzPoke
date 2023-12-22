import {  Link } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="form">
        
        <form className="login-form">
          <input type="text" placeholder="authentification code" />
          <button>login</button>
          <p className="message">
            Not registered? <Link  to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
