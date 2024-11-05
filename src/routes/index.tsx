import { createBrowserRouter } from "react-router-dom";

import StoreLayout from "@/layouts/StoreLayout";
import Category from "@/pages/Admin/Category";
import DashboardPage from "@/pages/Admin/DashboardPage";
import ProductsPage from "@/pages/Admin/ProductsPage";
import AccessDenied from "@/pages/Auth/AccessDenied";
import LoginPage from "@/pages/Auth/LoginPage";
import NotFound from "@/pages/Auth/NotFound";
import LandingPage from "@/pages/Store/LandingPage";
import StoreProductsPage from "@/pages/Store/StoreProductsPage";
import { ROUTES } from "./endpoints";

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
    element: <StoreLayout />,
    children: [
      {
        path: ROUTES.STORE.PRODUCTS,
        element: <StoreProductsPage />,
      },
    ],
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
