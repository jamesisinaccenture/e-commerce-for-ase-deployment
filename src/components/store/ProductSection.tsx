import { Link } from "react-router-dom";

import { ISampleProductData } from "@/models/store.model";
import { ROUTES } from "@/routes/endpoints";
import ProductSectionCard from "./ProductSectionCard";

const ProductSection = ({ store_products }: ISampleProductData) => {
  return (
    <>
      <div className="mt-10 mb-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">
            Our <span className="text-blue-500">Products</span>
          </h1>
          <Link to={ROUTES.STORE.PRODUCTS}>View All</Link>
        </div>
        <hr />
        <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
          {store_products.map((products) => {
            return (
              <ProductSectionCard
                products={products}
                key={products.product_id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
