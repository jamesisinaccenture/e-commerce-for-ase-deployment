import { Navigate } from "react-router-dom";

import { isUserAdmin } from "@/lib/utils";
import { IRoutes } from "@/models/auth.model";
import { ROUTES } from "@/routes/endpoints";
import ContentWrapper from "./ContentWrapper";

const StoreRoutes = ({ component: StorePage }: IRoutes) => {
  return !isUserAdmin() ? (
    <ContentWrapper>
      <StorePage />
    </ContentWrapper>
  ) : (
    <Navigate to={ROUTES.ADMIN.DASHBOARD} />
  );
};

export default StoreRoutes;
