import { Outlet } from "react-router-dom";

import StoreFooter from "@/components/store/StoreFooter";
import StoreHeader from "@/components/store/StoreHeader";

const StoreLayout = () => {
  return (
    <>
      <StoreHeader />
      <div className="h-full">
        <Outlet />
      </div>
      <StoreFooter />
    </>
  );
};

export default StoreLayout;
