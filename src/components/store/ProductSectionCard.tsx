import { IProductData } from "@/models/store.model";

const ProductSectionCard = ({
  product_name,
  product_img,
  currency,
  price,
}: IProductData) => {
  return (
    <>
<<<<<<< HEAD
      <div className="flex flex-col justify-between border-2 rounded-xl hover:border-blue-500 shadow-xl transition-all">
        <AspectRatio ratio={8 / 9}>
=======
      <div className="flex flex-col justify-between border rounded-xl hover:border-blue-500 hover:shadow-md">
        <div className="p-2 rounded-lg">
>>>>>>> 1560f319d04f6a762829daf52744fe33aced8dd6
          <img
            src={product_img}
            alt={product_name}
            className="rounded-3xl object-contain bg-cover w-full h-48"
          />
        </div>
        <div className="flex flex-col text-sm p-2 font-semibold w-full rounded-b-lg overflow-hidden">
<<<<<<< HEAD
          <p className="text-lg font-bold mb-2">{product_name}</p>
          {/* <p>{`${products.currency} ${products.price}`}</p> */}
          <p className="text-gray-600 mb-4">More details here</p>
          <hr />
          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
          >
            Add to Cart
          </button>
=======
          <p>{product_name}</p>
          <p>{`${currency} ${price}`}</p>
          <p>More details here</p>
          <hr />
          <a href="#" className="text-[#E3BC01] pt-2">
            Add to cart
          </a>
>>>>>>> 1560f319d04f6a762829daf52744fe33aced8dd6
        </div>
      </div>
    </>
  );
};

export default ProductSectionCard;
