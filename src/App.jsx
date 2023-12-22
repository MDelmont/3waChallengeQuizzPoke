import { FC } from "react";
import { Home } from "./pages/Home";
import { LearnPage } from "./pages/Learn";
import { LogoApp } from "./components/Logo";
import { QuizzPage } from "./pages/Quizzpage";
import { LeaderBoard } from "./pages/LeaderBoard";
import { LoginPage } from "./pages/Login";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
