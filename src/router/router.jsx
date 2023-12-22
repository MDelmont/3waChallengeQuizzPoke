import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { LearnPage } from "../pages/Learn";
import { QuizzPage } from "../pages/Quizzpage";
import { LeaderBoard } from "../pages/LeaderBoard";

const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/LearnPage/1">LearnPage</Link>
            </li>
            <li>
              <Link to="/QuizzPage">QuizzPage</Link>
            </li>
            <li>
              <Link to="/LeaderBoard">LeaderBoard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "LearnPage/:page", 
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
]);
