import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductModal = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <DialogContent className="max-w-lg p-6 relative">
      <div className="flex justify-center mb-6">
        <img
          src={product.image}
          alt={product.product_name}
          className="w-40 h-40 object-cover"
        />
      </div>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">
          {product.product_name}
        </DialogTitle>
        <DialogDescription className="text-gray-600 mb-4">
          <p>Brand: {product.brand}</p>
          <p>Battery: {product.battery}</p>
          <p>
            Wireless Powershare: {product.wireless_powershare ? "Yes" : "No"}
          </p>
          <p>Storage: {product.storage}</p>
          <p>Processor: {product.processor}</p>
          <p>RAM: {product.ram}</p>
        </DialogDescription>
      </DialogHeader>
      <div className="mb-4">
        <p className="font-semibold">Variants:</p>
        <div className="flex space-x-2">
          {product.variants.map((variant: string, index: number) => (
            <span
              key={index}
              className={`px-2 py-1 text-white rounded-full bg-${variant.toLowerCase()}`}
            >
              {variant}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Product Description:</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
      <div className="flex items-center mb-4">
        <button onClick={handleDecrease} className="px-3 py-1 border">
          -
        </button>
        <span className="px-3">{quantity}</span>
        <button onClick={handleIncrease} className="px-3 py-1 border">
          +
        </button>
      </div>
      <DialogFooter className="flex justify-start space-x-2">
        <Button type="button" defaultValue="primary">
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
