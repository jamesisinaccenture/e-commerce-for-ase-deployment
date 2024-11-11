import Carousel from "@/components/reusable/Carousel";
//import StoreCard from "@/components/store/StoreCard";
import CategorySection from "@/components/store/CategorySection";

const LandingPage = () => {
  return (
    <>
      <div className="justify-center min-h-screen px-4 py-8">
        <Carousel />
      </div>
      <div className="flex justify-center min-h-screen">
        <CategorySection />
      </div>
    </>
  );
};

export default LandingPage;
