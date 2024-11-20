import { Outlet } from "react-router-dom";

import ContentWrapper from "@/components/reusable/ContentWrapper";
import StoreFooter from "@/components/store/StoreFooter";
import StoreHeader from "@/components/store/StoreHeader";

const StoreLayout = () => {
  return (
    <>
      <StoreHeader />
      <ContentWrapper className="min-h-[40rem]">
        <Outlet />
      </ContentWrapper>
      <StoreFooter />
    </>
  );
};

export default StoreLayout;
