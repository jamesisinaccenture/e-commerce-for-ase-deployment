import Carousel from "@/components/reusable/Carousel";
import ProductSection from "@/components/store/ProductSection";
import { store_products } from "@/lib/constants";

const LandingPage = () => {
  return (
    <div className="justify-center min-h-screen px-4 py-8">
      <Carousel />

      <ProductSection store_products={store_products} />
    </div>
  );
};

export default LandingPage;
