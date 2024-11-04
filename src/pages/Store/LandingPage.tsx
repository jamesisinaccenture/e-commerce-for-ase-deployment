import StoreCard from "@/components/store/StoreCard";
import StoreLayout from "@/layouts/StoreLayout";

const LandingPage = () => {
  return (
    <StoreLayout>
      <div className="flex justify-center min-h-screen">
        <StoreCard />
      </div>
    </StoreLayout>
  );
};

export default LandingPage;
