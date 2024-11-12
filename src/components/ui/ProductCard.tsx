// components/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  originalPrice,
  discountedPrice,
  discount,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="text-sm text-gray-500 line-through">₹{originalPrice}</div>
      <div className="text-lg font-bold text-green-500">₹{discountedPrice}</div>
      <div className="text-xs font-semibold text-blue-500">{discount}% OFF</div>
    </div>
  );
};

export default ProductCard;
