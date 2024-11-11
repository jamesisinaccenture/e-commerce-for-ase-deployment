import productImage from "@/assets/images/product-image.jpg";
import { store_products } from "./DummyProductsData";

const ProductList = () => {
  return (
    <>
      <ul className="flex flex-wrap justify-center gap-20 mt-10 mb-10">
        {store_products.map((products) => {
          return (
            <li className="flex flex-col justify-center border-2 rounded-xl hover:border-blue-500 shadowx-xl">
              <div className="container">
                <div className="h-48 w-44">
                  <img
                    src={productImage} //sample image.
                    alt={products.product_name}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col text-sm pl-2 pr-2 pb-2 font-semibold font-sans">
                  <p>{products.product_name}</p>
                  <p>{products.product_price}</p>
                  <hr />
                  <p className="text-green-600">Save</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
