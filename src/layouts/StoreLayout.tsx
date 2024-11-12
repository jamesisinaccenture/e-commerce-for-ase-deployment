import { Outlet } from "react-router-dom";

import ContentWrapper from "@/components/reusable/ContentWrapper";
import StoreFooter from "@/components/store/StoreFooter";
import StoreHeader from "@/components/store/StoreHeader";

const StoreLayout = () => {
  return (
    <>
      <StoreHeader />
      <div className="h-full">
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </div>
      <StoreFooter />
    </>
  );
};

export default StoreLayout;
