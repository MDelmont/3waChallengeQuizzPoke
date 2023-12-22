import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../features/auth/auth"
export const RegisterPage = () => {
  const [userNameExists, setUserNameExists] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.elements.Username.value;
    const detailRegister = auth.registerUser(username)
    if (detailRegister.isRegister){
      alert(`Your authentication code: ${detailRegister.token}`);
      return navigate("/login");
    }else {
      setUserNameExists(true);
      return;
    }
  };

  return (
    <div className="register-page">
      <div className="form">
        <form className="register-form" onSubmit={handleRegister}>
          {userNameExists && (
            <span className="error">Username already exists</span>
          )}
          <input type="text" placeholder="Username" id="Username" />
          <button type="submit">create</button>
          <p className="message">
            Already registered? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
