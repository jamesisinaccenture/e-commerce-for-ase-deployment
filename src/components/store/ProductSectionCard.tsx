import productImage from "@/assets/images/product-image.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProductSectionCard = (products: any) => {
  return (
    <>
      <div className="flex flex-col justify-between border-2 rounded-xl hover:border-blue-500 shadow-xl">
        <AspectRatio ratio={8 / 9}>
          <img
            src={productImage} // src={products.products.product_img}
            alt={products.product_name}
            className="rounded-t-lg object-contain w-full"
          />
        </AspectRatio>
        <div className="flex flex-col text-sm p-2 font-semibold w-full rounded-b-lg overflow-hidden">
          <p>{products.product_name}</p>
          {/* <p>{`${products.currency} ${products.price}`}</p> */}
          <p>Helloooooooooooooooooooooooo</p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default ProductSectionCard;
