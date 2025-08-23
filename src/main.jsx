import { createRoot } from "react-dom/client";
import { lazy } from "react";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[ 
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);

const root = createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={routes} />);
