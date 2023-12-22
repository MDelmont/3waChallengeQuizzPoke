import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../features/auth/auth";
export const LoginPage = () => {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.elements.Username.value;
    const token = e.target.elements.token.value;
    const LoginDetail = auth.loginUser(username, token);
    if (LoginDetail.isLogin) {
      navigate("/");
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleLogin}>
          {loginError && <span>Erreur username/mot de passe</span>}
          <input type="text" placeholder="UserName" id="Username" />
          <input type="text" placeholder="authentification code" id="token" />
          <button>login</button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
