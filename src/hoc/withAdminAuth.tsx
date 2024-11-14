import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuthStore } from "@/hooks/state/useAuth";
import { isUserAdmin } from "@/lib/utils";
import { ROUTES } from "@/routes/endpoints";

const withAdminAuth = (Component: React.ComponentType) => {
  const AdminAuthHOC = (props: any) => {
    const { isAuth, isAdmin } = useAuthStore();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (isAuth && isAdmin && isUserAdmin()) {
        // Redirect to admin base if user is already authenticated as admin
        navigate(ROUTES.ADMIN.BASE);
      } else if (!isAuth && location.pathname !== ROUTES.LOGIN) {
        // Redirect to login if not authenticated or not an admin and not already on the login page
        navigate(ROUTES.LOGIN);
      }
    }, [isAuth, isAdmin, navigate, location.pathname]);

    return <Component {...props} />;
  };

  return AdminAuthHOC;
};

export default withAdminAuth;
