import AccessDenied from "@/pages/Auth/AccessDenied";
import AdminLayout from "@/layouts/AdminLayout";
import AdminRoutes from "@/components/reusable/AdminRoutes";
import DashboardPage from "@/pages/Admin/DashboardPage";
import LandingPage from "@/pages/Store/LandingPage";
import LoginPage from "@/pages/Auth/LoginPage";
import NotFound from "@/pages/Auth/NotFound";
import ProductsPage from "@/pages/Admin/ProductsPage";
import { ROUTES } from "./endpoints";
import StoreLayout from "@/layouts/StoreLayout";
import StoreProductsPage from "@/pages/Store/StoreProductsPage";
import { createBrowserRouter } from "react-router-dom";

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
