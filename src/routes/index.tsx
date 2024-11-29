import { createBrowserRouter } from "react-router-dom";

import AdminRoutes from "@/components/reusable/AdminRoutes";
import CustomLoader from "@/components/reusable/CustomLoader";
import StoreRoutes from "@/components/reusable/StoreRoutes";
import AdminLayout from "@/layouts/AdminLayout";
import StoreLayout from "@/layouts/StoreLayout";
import {
  AccessDenied,
  AllProductsPage,
  CartPage,
  CategoryPage,
  CheckoutPage,
  CheckoutSuccessPage,
  DashboardPage,
  ForgetPasswordPage,
  InformationSettingsPage,
  LandingPage,
  LoginPage,
  NotFound,
  ProductsPage,
  SignupPage,
  TransactionPage,
  UpdateInformationSettingsPage,
  UsersPage,
} from "@/pages";
import { ROUTES } from "./endpoints";

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    element: <ForgetPasswordPage />,
  },
  {
    path: ROUTES.REGISTER,
    element: <SignupPage />,
  },
  {
    path: ROUTES.TEST,
    element: <CustomLoader />,
  },
  {
    path: ROUTES.BASE,
    element: <StoreRoutes component={StoreLayout} />,
    children: [
      { path: ROUTES.BASE, element: <LandingPage /> },
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
      {
        path: ROUTES.STORE.CHECKOUT,
        element: <CheckoutPage />,
      },
      {
        path: ROUTES.STORE.PRODUCTS,
        element: <AllProductsPage />,
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
      { path: ROUTES.ADMIN.TRANSACTIONS, element: <TransactionPage /> },
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
