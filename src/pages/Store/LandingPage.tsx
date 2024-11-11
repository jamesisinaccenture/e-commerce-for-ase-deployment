import ProductSection from "@/components/reusable/ProductSection";
import { store_products } from "@/components/reusable/SampleProductsData";

const LandingPage = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <ProductSection store_products={store_products} />
    </div>
  );
};

export default LandingPage;
