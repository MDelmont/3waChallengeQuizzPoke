import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/login");
    }
  }, [navigate]); 

  return <>{children}</>;
};
