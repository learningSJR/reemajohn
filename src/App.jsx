import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Qualifications from "./pages/Qualifications.jsx";
import Availability from "./pages/Availability.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      { path: "education", element: <Qualifications /> },
      { path: "availability", element: <Availability /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
