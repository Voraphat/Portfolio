import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Hero from './components/Hero/Hero.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skill from "./components/Skill/Skill.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Project from "./components/Project/Project.jsx";
import AboutMe from "./components/Aboutme/Aboutme.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Hero />,
  },
  {
    path: "/aboutme",
    element: <AboutMe/>,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
