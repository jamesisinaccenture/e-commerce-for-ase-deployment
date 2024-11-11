import { ISampleProductData } from "@/models/store.model";

import ProductSectionList from "./ProductSectionCard";

const ProductSection = ({ store_products }: ISampleProductData) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
        {store_products.map((products) => {
          return (
            <ProductSectionList products={products} key={products.product_id} />
          );
        })}
      </div>
    </>
  );
};

export default ProductSection;
