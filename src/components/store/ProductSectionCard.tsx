import productImage from "@/assets/images/product-image.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { IProductData } from "@/models/store.model";

const ProductSectionCard = ({
  // product_id,
  product_name,
}: // product_img,
// currency,
// price,
IProductData) => {
  return (
    <>
      <div className="flex flex-col justify-between border-2 rounded-xl hover:border-blue-500 shadow-xl transition-all">
        <AspectRatio ratio={8 / 9}>
          <img
            src={productImage} // src={products.products.product_img}
            alt={product_name}
            className="rounded-t-lg object-contain w-full"
          />
        </AspectRatio>
        <div className="flex flex-col text-sm p-2 font-semibold w-full rounded-b-lg overflow-hidden">
          <p className="text-lg font-bold mb-2">{product_name}</p>
          {/* <p>{`${products.currency} ${products.price}`}</p> */}
          <p className="text-gray-600 mb-4">More details here</p>
          <hr />
          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSectionCard;
