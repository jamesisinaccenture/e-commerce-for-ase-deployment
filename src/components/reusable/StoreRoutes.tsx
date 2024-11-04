import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/hooks/state/useAuth";
import { IRoutes } from "@/models/auth.model";
import { ROUTES } from "@/routes/endpoints";

const StoreRoutes = ({ component: StorePage }: IRoutes) => {
  const { isAdmin } = useAuthStore();

  return !isAdmin ? <StorePage /> : <Navigate to={ROUTES.ADMIN.DASHBOARD} />;
};

export default StoreRoutes;
