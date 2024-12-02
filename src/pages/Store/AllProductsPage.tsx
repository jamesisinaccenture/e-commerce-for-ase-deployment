import React, { useEffect, useMemo, useState } from "react";

import ProductSection from "@/components/store/ProductSection";
import { useProductStore } from "@/hooks/state/store/useProduct";
import { cn } from "@/lib/utils";
import useProductSevices from "@/services/store/productServices";

const categories = [
  "All",
  "Groceries",
  "Premium Fruits",
  "Home & Kitchen",
  "Fashion",
  "Electronics",
  "Beauty",
];

const PRODUCTS_PER_PAGE = 40;

const AllProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { products } = useProductStore();

  const { getProducts } = useProductSevices();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProducts = useMemo(() => {
    return selectedCategory === "All"
      ? products
      : products.filter((product) =>
          product?.category?.some((category) =>
            category.includes(selectedCategory)
          )
        );
  }, [products, selectedCategory]);

  // Display products for the current page only
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen py-10">
      <header className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap gap-3 mt-4 md:mt-0 flex-col sm:flex-row">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "w-30 px-4 py-2 rounded-full font-medium transition",
                selectedCategory === category
                  ? "bg-store-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-store-primary hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Display products in 10 rows, each with 4 products */}
      <ProductSection products={displayedProducts} />
    </div>
  );
};

export default AllProductsPage;