import { createBrowserRouter } from "react-router-dom";

import AdminRoutes from "@/components/reusable/AdminRoutes";
import StoreRoutes from "@/components/reusable/StoreRoutes";
import AdminLayout from "@/layouts/AdminLayout";
import StoreLayout from "@/layouts/StoreLayout";
import DashboardPage from "@/pages/Admin/DashboardPage";
import ProductsPage from "@/pages/Admin/ProductsPage";
import AccessDenied from "@/pages/Auth/AccessDenied";
import ForgotPassword from "@/pages/Auth/ForgetPasswordPage";
import LoginPage from "@/pages/Auth/LoginPage";
import NotFound from "@/pages/Auth/NotFound";
import SignupPage from "@/pages/Auth/SignupPage";
import LandingPage from "@/pages/Store/LandingPage";
import Products from "@/pages/Store/Products";
import { ROUTES } from "./endpoints";

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: ROUTES.REGISTER,
    element: <SignupPage />,
  },
  {
    path: ROUTES.BASE,
    element: <StoreRoutes component={StoreLayout} />,
    children: [
      { path: ROUTES.BASE, element: <LandingPage /> },
      { path: ROUTES.STORE.PRODUCTS, element: <Products /> },
    ],
  },
  {
    path: ROUTES.ADMIN.BASE,
    element: <AdminRoutes component={AdminLayout} />,
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
