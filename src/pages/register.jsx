import { Link } from "react-router-dom";
export const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="form">
        <form className="register-form">
          <input type="text" placeholder="name" />
          <button>create</button>
          <p className="message">
            Already registered? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
