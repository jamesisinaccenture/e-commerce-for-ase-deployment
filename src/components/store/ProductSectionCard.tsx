import { IProductData } from "@/models/store.model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductSectionCard = (products: IProductData) => {
  return (
    <>
      <div className="flex flex-col justify-center border-2 rounded-xl hover:border-blue-500 shadowx-xl">
        <div className="container">
          <div className="h-48 w-44">
            <img
              src={products.product_img}
              alt={products.product_name}
              className="rounded-t-lg"
            />
          </div>
          <div className="flex flex-col text-sm pl-2 pr-2 pb-2 font-semibold font-sans">
            <p>{products.product_name}</p>
            <p>
              "{products.currency} {products.price}"
            </p>
            <hr />
            <p className="text-green-600">Save</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSectionCard;
