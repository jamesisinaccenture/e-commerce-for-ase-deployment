import { useState } from "react";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IProductData } from "@/models/store.model";

const ProductModal = ({ product }: { product: IProductData }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <DialogContent className="max-w-3xl p-8 bg-white rounded-lg shadow-lg h-fit">
      <div className="flex justify-between items-start">
        <img
          src={product.product_img || "src/assets/images/wireless airpods.jpg"}
          alt={product.product_name || "Product"}
          className="w-52 h-52 object-cover rounded-md"
        />

        <div className="flex-1 pl-8">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-2">
              {product.product_name || "Unnamed Product"}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-700 mb-4">
              {product.currency} {product.price}
            </DialogDescription>
          </DialogHeader>

          <div className="mb-4">
            <p className="font-semibold text-lg">Variants:</p>
            <div className="flex space-x-2 mt-2">
              {product.variants?.map((variant: string, index: number) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-white rounded-full ${
                    variant.toLowerCase() === "red"
                      ? "bg-red-500"
                      : variant.toLowerCase() === "blue"
                      ? "bg-blue-500"
                      : variant.toLowerCase() === "green"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                >
                  {variant}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-lg">Product Description:</p>
            <p className="text-gray-700 mt-2">
              {product.product_description || "No description available."}
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={handleDecrease}
              className="px-3 py-1 border border-gray-300 bg-gray-200 hover:bg-gray-300 rounded"
            >
              -
            </button>
            <span className="px-3 text-lg font-medium">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-3 py-1 border border-gray-300 bg-gray-200 hover:bg-gray-300 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default ProductModal;
