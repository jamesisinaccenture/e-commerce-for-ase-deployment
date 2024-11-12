import React from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null; // If no product is selected, return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
        <div className="text-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
