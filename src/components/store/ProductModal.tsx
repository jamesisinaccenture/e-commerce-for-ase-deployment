import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { IProductData } from "@/models/store.model";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductModal = ({ product }: { product: IProductData }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <DialogContent className="max-w-lg p-6 ">
      <div className="flex justify-center mb-6">
        <img
          src={product.product_img || "/default-image.jpg"} // Fallback to a default image
          alt={product.product_name || "Product"}
          className="w-40 h-40 object-cover"
        />
      </div>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">
          {product.product_name || "Unnamed Product"}
        </DialogTitle>
        <DialogDescription className="text-gray-600 mb-4">
          {product.currency} {product.price}
        </DialogDescription>
      </DialogHeader>
      <div className="mb-4">
        <p className="font-semibold">Variants:</p>
        <div className="flex space-x-2">
          {/* {product?.variants?.map((variant: string, index: number) => (
            <span
              key={index}
              className={`px-2 py-1 text-white rounded-full ${
                variant.toLowerCase() === "red" ? "bg-red-500" : "bg-gray-500"
              }`}>
              {variant}
            </span>
          ))} */}
        </div>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Product Description:</p>
        <p className="text-gray-700">
          {product.product_description || "No description available."}
        </p>
      </div>
      <div className="flex items-center mb-4">
        <button
          onClick={handleDecrease}
          className="px-3 py-1 border bg-gray-200 hover:bg-gray-300">
          -
        </button>
        <span className="px-3">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="px-3 py-1 border bg-gray-200 hover:bg-gray-300">
          +
        </button>
      </div>
      <DialogFooter className="flex justify-start space-x-2">
        <Button type="button" variant="default">
          Add to Cart
        </Button>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default ProductModal;
