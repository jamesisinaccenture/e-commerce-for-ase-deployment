import { useEffect } from "react";

import { useProductServices } from "@/services/admin/productServices";

const ProductsPage = () => {
  const { getProducts, isLoading } = useProductServices();

  useEffect(() => {
    getProducts();
    console.log(isLoading);
  }, []);
  return <div>ProductsPage</div>;
};

export default ProductsPage;
