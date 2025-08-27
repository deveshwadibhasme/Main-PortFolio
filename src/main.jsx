import { createRoot } from "react-dom/client";
import { lazy } from "react";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Education = lazy(() => import("./pages/Education.jsx"));
const Project = lazy(() => import("./pages/Project.jsx"));



const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[ 
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '/experience',
        element: <Experience />
      },
      {
        path: '/education',
        element: <Education />
      },
    ]
  },
]);

const root = createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={routes} />);
