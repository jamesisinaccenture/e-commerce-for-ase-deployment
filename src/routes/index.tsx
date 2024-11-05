import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./endpoints";

import DashboardPage from "@/pages/Admin/DashboardPage";
import LandingPage from "@/pages/Store/LandingPage";
import LoginPage from "@/pages/Auth/LoginPage";
import ProductsPage from "@/pages/Admin/ProductsPage";
import Category from "@/pages/Admin/Category";
import NotFound from "@/pages/Auth/NotFound";
import AccessDenied from "@/pages/Auth/AccessDenied";

export const router = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <LandingPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.STORE.HOME,
    element: <LandingPage />,
  },
  {
    path: ROUTES.ADMIN.BASE,
    element: <DashboardPage />,
    children: [
      { path: ROUTES.ADMIN.PRODUCT, element: <ProductsPage /> },
      { path: ROUTES.ADMIN.CATEGORY, element: <Category /> },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: ROUTES.ACCESS_DENIED,
    element: <AccessDenied />,
  },
]);
