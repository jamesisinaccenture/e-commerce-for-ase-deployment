import React, { useState } from "react";

import ProductSectionCard from "@/components/store/ProductSectionCard";
import { store_products } from "@/lib/constants";
import { IProductData } from "@/models/store.model";

const categories = [
  "All",
  "Groceries",
  "Premium Fruits",
  "Home & Kitchen",
  "Fashion",
  "Electronics",
  "Beauty",
];

const AllProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? store_products
      : store_products.filter(
          (product: IProductData) => product.category === selectedCategory
        );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            All <span className="text-blue-600">Products</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-3 mt-4 md:mt-0 flex-col sm:flex-row">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`w-30 px-4 py-2 rounded-lg font-medium transition ${
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

      <div className="flex justify-center gap-10 flex-wrap">
        {filteredProducts.map((product: IProductData) => (
          <ProductSectionCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
