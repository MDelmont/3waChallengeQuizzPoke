import {
  createBrowserRouter,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { LearnPage } from "../pages/Learn";
import { LoginPage } from "../pages/Login";
import { ErrorPage } from "../pages/Error";
import { RegisterPage } from "../pages/register";
import { QuizzPage } from "../pages/Quizzpage";
import { LeaderBoard } from "../pages/LeaderBoard";
import { AuthGuard } from "./AuthGuard";

/**
 * creat template of page with nav and content
 * @returns Template of page
 */
const Root = () => {
  const navigate = useNavigate();
  const handleClicLogOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/LearnPage">LearnPage</Link>
            </li>
            <li>
              <Link to="/QuizzPage">QuizzPage</Link>
            </li>
            <li>
              <Link to="/LeaderBoard">LeaderBoard</Link>
            </li>
          </ul>
          <button onClick={handleClicLogOut}>logout</button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
/**
 * Create root of projet
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Root />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "LearnPage",
        element: <LearnPage />,
      },
      {
        path: "QuizzPage",
        element: <QuizzPage />,
      },
      {
        path: "LeaderBoard",
        element: <LeaderBoard />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
