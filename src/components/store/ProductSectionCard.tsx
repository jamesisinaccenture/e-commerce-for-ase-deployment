import { ShoppingCart } from "lucide-react";

import productImage from "@/assets/images/image p..png";
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
        <div className="overflow-hidden w-full h-[200px]">
          <AspectRatio ratio={1 / 1}>
            <div className="bg-blue-500 absolute top-2 left-2 rounded-xl p-2 hover:cursor-pointer">
              <ShoppingCart size={20} color="white" />
            </div>
            <img
              src={productImage}
              alt="Product Image"
              className="bg-gray-100 rounded-t-xl h-auto w-full"
            />
            <div className="bg-blue-500 absolute rounded-tr-lg rounded-bl-lg top-0 right-0 p-4">
              <p className="text-white ">
                50% <br />
                OFF
              </p>
            </div>
          </AspectRatio>
        </div>
        <div className="flex flex-col justify-between p-4">
          <p className="font-semibold">Galaxy S22 Ultra</p>
          <p className="font-bold">$1200</p>
          <hr className="mt-2 border" />
          <p className="mt-2 font-semibold text-lg text-green-500">Save $150</p>
        </div>
      </div>
    </>
  );
};

export default ProductSectionCard;
