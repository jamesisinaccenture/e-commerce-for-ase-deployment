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
      <div className="flex flex-col justify-between border-2 rounded-xl hover:border-blue-500 shadow-xl">
        <AspectRatio ratio={8 / 9}>
          <img
            src={productImage} // src={products.products.product_img}
            alt={product_name}
            className="rounded-t-lg object-contain w-full"
          />
        </AspectRatio>
        <div className="flex flex-col text-sm p-2 font-semibold w-full rounded-b-lg overflow-hidden">
          <p>{product_name}</p>
          {/* <p>{`${products.currency} ${products.price}`}</p> */}
          <p>More details here</p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default ProductSectionCard;
