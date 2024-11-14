import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/hooks/state/useAuth";
import { isUserAdmin } from "@/lib/utils";
import { IRoutes } from "@/models/auth.model";
import { ROUTES } from "@/routes/endpoints";

const StoreRoutes = ({ component: StorePage }: IRoutes) => {
  const { isAuth } = useAuthStore();

  return isAuth && !isUserAdmin() ? (
    <StorePage />
  ) : (
    <Navigate to={ROUTES.ADMIN.BASE} />
  );
};

export default StoreRoutes;
