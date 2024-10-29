import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/DashboardPage";
import LandingPage from "@/pages/LandingPage";
import DefaultPage from "@/pages/DefaultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      { path: "admin", element: <Dashboard /> },
      { path: "store", element: <LandingPage /> },
      // Uncomment and add more routes as needed

      // { path: "login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
