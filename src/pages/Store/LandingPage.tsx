import Carousel from "@/components/reusable/Carousel";
//import StoreCard from "@/components/store/StoreCard";
import CategorySection from "@/components/store/CategorySection";
import ProductSection from "@/components/store/ProductSection";
import { store_products } from "@/lib/constants";

// import CartPage from "./CartPage";
const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen px-4 py-8">
        <Carousel />
        <CategorySection />
        <ProductSection store_products={store_products} />
      </div>
    </>
  );
};

export default LandingPage;
