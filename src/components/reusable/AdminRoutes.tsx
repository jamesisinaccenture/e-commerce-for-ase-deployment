import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/hooks/state/auth/useAuth";
import { IRoutes } from "@/models/auth.model";
import { ROUTES } from "@/routes/endpoints";

const AdminRoutes = ({ component: AdminPage }: IRoutes) => {
  const { isAdmin, isAuth } = useAuthStore();

  return isAuth && isAdmin ? <AdminPage /> : <Navigate to={ROUTES.LOGIN} />;
};

export default AdminRoutes;
