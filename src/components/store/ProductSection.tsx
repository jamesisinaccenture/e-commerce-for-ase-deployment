import { Link } from "react-router-dom";

import ProductSectionCard from "@/components/store/ProductSectionCard";
import { ISampleProductData } from "@/models/store.model";
import { ROUTES } from "@/routes/endpoints";

const ProductSection = ({ store_products, isHome }: ISampleProductData) => {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-10">
          {store_products.map((product: IProductData) => (
            <Dialog key={product.product_id}>
              <DialogTrigger asChild>
                <div>
                  <ProductSectionCard {...product} />
                </div>
              </DialogTrigger>
              <ProductModal product={product} />
            </Dialog>
          ))}
        </div>
        <div className="mt-10 mb-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold border-b border-blue-300">
              {isHome ? "Our" : "All"}{" "}
              <span className="text-blue-500">Products</span>
            </h1>
            {isHome && <Link to={ROUTES.STORE.PRODUCTS}>View All</Link>}
          </div>
          <hr />
        </div>
        <div className="grid grid-cols-custom gap-4 w-full">
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
