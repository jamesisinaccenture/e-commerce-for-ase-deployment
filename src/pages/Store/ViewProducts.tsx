// src/pages/ViewProducts.tsx
import React, { useState, useEffect } from "react";

import ProductBadge from "@/components/ui/ProductBadge";
import ProductButton from "@/components/ui/ProductButton";
import {
  ProductCard,
  CardHeader,
  CardFooter,
} from "@/components/ui/ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  discount: string;
  originalPrice: string;
}

const ViewProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Sample product data. Replace this with an API call if needed.
    const sampleProducts: Product[] = [
      {
        id: 1,
        name: "Galaxy S23 Ultra",
        image: "/path/to/image.jpg",
        price: "$999",
        discount: "30% OFF",
        originalPrice: "$1299",
      },
      {
        id: 2,
        name: "Galaxy M13",
        image: "/path/to/image.jpg",
        price: "$299",
        discount: "25% OFF",
        originalPrice: "$399",
      },
      // Add more products as needed
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-white p-4 shadow-md mb-4">
        <h1 className="text-2xl font-semibold">All Products</h1>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className="w-full p-2 shadow-md rounded-lg"
          >
            <CardHeader>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-32 rounded-lg"
                />
                <ProductBadge className="absolute top-2 right-2 text-sm bg-blue-500 text-white">
                  {product.discount}
                </ProductBadge>
              </div>
              <h2 className="mt-2 text-sm font-medium">{product.name}</h2>
            </CardHeader>
            <CardFooter className="flex justify-between items-center text-sm font-semibold">
              <span className="text-green-600">{product.price}</span>
              <span className="line-through text-gray-500">
                {product.originalPrice}
              </span>
            </CardFooter>
            <ProductButton
              variant="secondary"
              size="sm"
              className="mt-2 w-full"
            >
              View Details
            </ProductButton>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ViewProducts;
