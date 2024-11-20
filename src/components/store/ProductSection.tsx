import { Link } from "react-router-dom";

import ProductSectionCard from "@/components/store/ProductSectionCard";
import { ISampleProductData } from "@/models/store.model";
import { ROUTES } from "@/routes/endpoints";

const ProductSection = ({ store_products }: ISampleProductData) => {
  return (
    <>
      <div className="flex flex-col gap-6 py-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">
            Our <span className="text-blue-500">Products</span>
          </h1>
          <Link to={ROUTES.STORE.PRODUCTS}>View All</Link>
        </div>
        <div>
          <hr />
        </div>
        <div className="grid grid-cols-5 gap-4 w-full">
          {store_products.map((products) => {
            return (
              <ProductSectionCard {...products} key={products.product_id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
