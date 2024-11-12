// src/pages/AllProductsPage.tsx
import React, { useState } from "react";

interface Product {
  id: number;
  image: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  category: string;
}

const categories = [
  "All",
  "Groceries",
  "Premium Fruits",
  "Home & Kitchen",
  "Fashion",
  "Electronics",
  "Beauty",
];

// Sample products with categories for filtering
const products: Product[] = [
  {
    id: 1,
    image: "src/assets/phone images/image 3.png",
    name: "Galaxy S22 Ultra",
    originalPrice: 42999,
    discountedPrice: 18040,
    discount: 56,
    category: "Electronics",
  },
  {
    id: 2,
    image: "src/assets/phone images/image 3.png",
    name: "Galaxy M13 (4GB | 64 GB)",
    originalPrice: 14999,
    discountedPrice: 6599.56,
    discount: 56,
    category: "Electronics",
  },
  {
    id: 3,
    image: "src/assets/phone images/image 3.png",
    name: "Samsung Galaxy",
    originalPrice: 24999,
    discountedPrice: 16999,
    discount: 56,
    category: "Electronics",
  },
  {
    id: 4,
    image: "src/assets/phone images/image 3.png",
    name: "Samsung Galaxy",
    originalPrice: 24999,
    discountedPrice: 16999,
    discount: 56,
    category: "Home & Kitchen",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    name: "Fashionable Shirt",
    originalPrice: 2999,
    discountedPrice: 1999,
    discount: 56,
    category: "Fashion",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    name: "Premium Fruit Pack",
    originalPrice: 2999,
    discountedPrice: 2499,
    discount: 20,
    category: "Premium Fruits",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/150",
    name: "Beauty Product A",
    originalPrice: 999,
    discountedPrice: 799,
    discount: 20,
    category: "Beauty",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/150",
    name: "Toys",
    originalPrice: 1999,
    discountedPrice: 1119.44,
    discount: 56,
    category: "Sports,Toys & Luggage",
  },
  {
    id: 9,
    image: "https://via.placeholder.com/150",
    name: "Milk",
    originalPrice: 2999,
    discountedPrice: 1679.44,
    discount: 56,
    category: "Groceries",
  },
];

const ProductCard: React.FC<Product> = ({
  image,
  name,
  originalPrice,
  discountedPrice,
  discount,
}) => {
  return (
    <div className="relative border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-200 w-[241px]">
      <span className="absolute top-[11px] left-[184px] w-[35px] h-[32px] bg-blue-600 text-white text-[14px] font-HKGrotesk font-semibold leading-[16px] flex items-center justify-center rounded-md">
        {discount}% OFF
      </span>
      <img
        src={image}
        alt={name}
        className="w-[241px] h-[241px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="text-sm text-gray-500 line-through">₹{originalPrice}</div>
      <div className="text-lg font-bold text-green-500">₹{discountedPrice}</div>
    </div>
  );
};

const AllProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          All <span className="text-blue-600">Products</span>
        </h1>

        <div className="flex flex-wrap space-x-4 mt-4 md:mt-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-500 hover:text-white`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            discount={product.discount}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
