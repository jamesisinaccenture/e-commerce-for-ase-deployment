import { Navigate, useNavigate } from "react-router-dom";

import { IRoutes } from "@/models/auth.model";
import { ROUTES } from "@/routes/endpoints";
import { useAuthStore } from "@/hooks/state/useAuth";
import { useEffect } from "react";

const AdminRoutes = ({ component: AdminPage }: IRoutes) => {
  const { isAdmin, isAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin && !isAuth) {
      navigate(ROUTES.LOGIN);
    }
  }, [isAuth, isAdmin, navigate]);

  return isAuth && isAdmin ? (
    <AdminPage />
  ) : (
    <Navigate to={ROUTES.ACCESS_DENIED} />
  );
};

export default AdminRoutes;
