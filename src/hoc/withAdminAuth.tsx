import React, { useEffect } from "react";

import { ROUTES } from "@/routes/endpoints";
import { useAuthStore } from "@/hooks/state/useAuth";
import { useNavigate } from "react-router-dom";

const withAdminAuth = (Component: React.ComponentType) => {
  const AdminAuthHOC = (props: any) => {
    const { isAuth, isAdmin } = useAuthStore();
    console.log("isAuth:", isAuth, "isAdmin:", isAdmin);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuth || !isAdmin) {
        // Redirect to login if not authenticated or not an admin
        navigate(ROUTES.LOGIN);
      }
    }, [isAuth, isAdmin, navigate]);

    return <Component {...props} />;
  };

  return AdminAuthHOC;
};

export default withAdminAuth;
