import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Notfound from "./pages/NotFound";
import About from "./pages/About";
import Experience from "./pages/Experience";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
