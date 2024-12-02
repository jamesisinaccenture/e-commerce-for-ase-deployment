import { lazy } from "react";

const storeTimeout = 1500;
const adminTimeout = 500;
const authTimeout = storeTimeout;

// STORE PAGES IMPORTS
const AllProductsPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Store/AllProductsPage")), storeTimeout);
  });
});
const CartPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Store/CartPage")), storeTimeout);
  });
});
const CheckoutPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(
      () => resolve(import("./Store/CheckoutPage")),
      storeTimeout
    );
  });
});
const CheckoutSuccessPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(
      () => resolve(import("./Store/CheckoutSuccessPage")),
      storeTimeout
    );
  });
});
const InformationSettingsPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(
      () => resolve(import("./Store/InformationSettingsPage")),
      storeTimeout
    );
  });
});
const LandingPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Store/LandingPage")), storeTimeout);
  });
});
const Products = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Store/Products")), storeTimeout);
  });
});
const UpdateInformationSettingsPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(
      () => resolve(import("./Store/UpdateInformationSettingsPage")),
      storeTimeout
    );
  });
});
const ViewProducts = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Store/ViewProducts")), storeTimeout);
  });
});

// ADMIN PAGES IMPORTS
const CategoryPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Admin/CategoryPage")), adminTimeout);
  });
});
const DashboardPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Admin/DashboardPage")), adminTimeout);
  });
});
const ProductsPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Admin/ProductsPage")), adminTimeout);
  });
});
const TransactionPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Admin/TransactionPage")), adminTimeout);
  });
});
const UsersPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Admin/UsersPage")), adminTimeout);
  });
});

// AUTH PAGES IMPORTS
const AccessDenied = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Auth/AccessDenied")), authTimeout);
  });
});
const DefaultPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Auth/DefaultPage")), authTimeout);
  });
});
const ForgetPasswordPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Auth/ForgetPasswordPage")), authTimeout);
  });
});
const LoginPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Auth/LoginPage")), authTimeout);
  });
});
const NotFound = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Auth/NotFound")), authTimeout);
  });
});
const SignupPage = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Auth/SignupPage")), authTimeout);
  });
});

export {
  // admin pages
  CategoryPage,
  DashboardPage,
  ProductsPage,
  TransactionPage,
  UsersPage,

  // auth pages
  AccessDenied,
  DefaultPage,
  ForgetPasswordPage,
  LoginPage,
  NotFound,
  SignupPage,

  // store pages
  AllProductsPage,
  CartPage,
  InformationSettingsPage,
  UpdateInformationSettingsPage,
  LandingPage,
  Products,
  CheckoutPage,
  CheckoutSuccessPage,
  ViewProducts,
};
