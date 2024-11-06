import StoreFooter from "@/components/store/StoreFooter";
import StoreHeader from "@/components/store/StoreHeader";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StoreHeader />

      {/* Main Content */}
      <div>{children}</div>

      <StoreFooter />
    </>
  );
};

export default StoreLayout;
