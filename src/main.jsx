import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Hero from './components/Hero/Hero.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";
import AboutMe from "./components/Aboutme/Aboutme.jsx";
import Slider from "./components/Slide/Slider.jsx";

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
    path:"/slide",
    element:<Slider/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
