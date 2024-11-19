import { createBrowserRouter } from "react-router-dom";

import AdminRoutes from "@/components/reusable/AdminRoutes";
import StoreRoutes from "@/components/reusable/StoreRoutes";
import AdminLayout from "@/layouts/AdminLayout";
import StoreLayout from "@/layouts/StoreLayout";
import CategoryPage from "@/pages/Admin/CategoryPage";
import DashboardPage from "@/pages/Admin/DashboardPage";
import ProductsPage from "@/pages/Admin/ProductsPage";
import UsersPage from "@/pages/Admin/UsersPage";
import AccessDenied from "@/pages/Auth/AccessDenied";
import ForgotPassword from "@/pages/Auth/ForgetPasswordPage";
import LoginPage from "@/pages/Auth/LoginPage";
import NotFound from "@/pages/Auth/NotFound";
import SignupPage from "@/pages/Auth/SignupPage";
import CartPage from "@/pages/Store/CartPage";
import InformationSettingsPage from "@/pages/Store/InformationSettingsPage";
import LandingPage from "@/pages/Store/LandingPage";
import StoreProductsPage from "@/pages/Store/StoreProductsPage";
import UpdateInformationSettingsPage from "@/pages/Store/UpdateInformationSettingsPage";
import { ROUTES } from "./endpoints";
import CheckoutSuccessPage from "@/pages/Store/CheckoutSuccessPage";

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
      { path: ROUTES.STORE.PRODUCTS, element: <StoreProductsPage /> },
      { path: ROUTES.STORE.CART, element: <CartPage /> },
      {
        path: ROUTES.STORE.PROFILE,
        element: <InformationSettingsPage />,
      },
      {
        path: ROUTES.STORE.PROFILE_SETTINGS,
        element: <UpdateInformationSettingsPage />,
      },
      {
        path: ROUTES.STORE.CHECKOUT_SUCCESS,
        element: <CheckoutSuccessPage />,
      },
    ],
  },
  {
    path: ROUTES.ADMIN.BASE,
    element: <AdminRoutes component={AdminLayout} />,
    children: [
      { path: ROUTES.ADMIN.BASE, element: <DashboardPage /> },
      { path: ROUTES.ADMIN.PRODUCT, element: <ProductsPage /> },
      { path: ROUTES.ADMIN.CATEGORY, element: <CategoryPage /> },
      { path: ROUTES.ADMIN.USERS, element: <UsersPage /> },
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
