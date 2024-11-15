import Carousel from "@/components/reusable/Carousel";
import CategorySection from "@/components/store/CategorySection";
import ProductSection from "@/components/store/ProductSection";
import { store_products } from "@/lib/constants";
import AllProductsPage from "./AllProductsPage";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen px-4 py-8">
        <Carousel />
        <h1 className="text-lg font-[Noto Sans HK] mb-4">
          Top <span className="text-blue-500">Categories</span>
        </h1>
        <CategorySection />
        <ProductSection store_products={store_products} />
        <AllProductsPage />
      </div>
    </>
  );
};

export default LandingPage;
