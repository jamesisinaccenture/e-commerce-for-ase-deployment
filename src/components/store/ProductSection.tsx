import { Link } from "react-router-dom";

import { ISampleProductData } from "@/models/store.model";
import { ROUTES } from "@/routes/endpoints";
import ProductSectionCard from "./ProductSectionCard";

const ProductSection = ({ store_products }: ISampleProductData) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
        {store_products.map((products) => {
          return (
            <ProductSectionCard products={products} key={products.product_id}>
              <Link to={ROUTES.STORE.PRODUCTS_MODAL} />
            </ProductSectionCard>
          );
        })}
      </div>
    </>
  );
};

export default ProductSection;
