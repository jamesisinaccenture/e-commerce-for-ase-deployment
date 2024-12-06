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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const { products } = useProductStore();

  const { getProducts } = useProductSevices();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProducts = useMemo(() => {
    if (selectedCategories.includes("All")) {
      return products;
    }

    return products.filter((product) => {
      const productCategories = Array.isArray(product?.category)
        ? product.category
        : [];

      return productCategories.some((cat: string) => {
        const categoryString = String(cat).toLowerCase();
        return selectedCategories.some(
          (selectedCat) => categoryString === selectedCat.toLowerCase()
        );
      });
    });
  }, [products, selectedCategories]);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setCurrentPage(1);

    if (category === "All") {
      setSelectedCategories(["All"]);
      return;
    }

    setSelectedCategories((prevCategories) => {
      const updatedCategories = prevCategories.filter((cat) => cat !== "All");
      if (updatedCategories.includes(category)) {
        // If the category is already selected, deselect it
        return updatedCategories.filter((cat) => cat !== category);
      } else {
        return [...updatedCategories, category];
      }
    });
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
                selectedCategories.includes(category)
                  ? "bg-store-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-store-primary hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </header>
      <ProductSection products={displayedProducts} />
    </div>
  );
};

export default AllProductsPage;
