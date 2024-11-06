import { createBrowserRouter } from "react-router-dom";

import AdminRoutes from "@/components/reusable/AdminRoutes";
import AdminLayout from "@/layouts/AdminLayout";
import DashboardPage from "@/pages/Admin/DashboardPage";
import ProductsPage from "@/pages/Admin/ProductsPage";
import AccessDenied from "@/pages/Auth/AccessDenied";
import SignupPage from "@/pages/Auth/SignupPage";
import LoginPage from "@/pages/Auth/LoginPage";
import NotFound from "@/pages/Auth/NotFound";
import LandingPage from "@/pages/Store/LandingPage";
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
    path: ROUTES.REGISTER,
    element: <SignupPage />,
  },
  {
    path: ROUTES.STORE.HOME,
    element: <LandingPage />,
  },
  {
    path: ROUTES.ADMIN.BASE,
    element: <AdminRoutes component={<AdminLayout />} />,
    children: [
      { path: ROUTES.ADMIN.BASE, element: <DashboardPage /> },
      { path: ROUTES.ADMIN.PRODUCT, element: <ProductsPage /> },
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
