import ProductSection from "@/components/store/ProductSection";
import { store_products } from "@/lib/constants";

const LandingPage = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <ProductSection store_products={store_products} />
    </div>
  );
};

export default LandingPage;
