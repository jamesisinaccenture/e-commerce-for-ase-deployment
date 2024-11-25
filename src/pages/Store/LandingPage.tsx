import { useEffect } from "react";

import Carousel from "@/components/reusable/Carousel";
import CategorySection from "@/components/store/CategorySection";
import ProductSection from "@/components/store/ProductSection";
import { useProductStore } from "@/hooks/state/store/useProduct";
import useProductSevices from "@/services/store/productServices";

const LandingPage = () => {
  const { products } = useProductStore();
  const { getProducts } = useProductSevices();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 justify-center min-h-screen py-8">
        <Carousel />
        <CategorySection />
        <ProductSection products={products} isHome />
      </div>
    </>
  );
};

export default LandingPage;
