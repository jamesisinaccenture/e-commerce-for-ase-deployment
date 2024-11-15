import React, { useState } from "react";

import ProductSectionCard from "@/components/store/ProductSectionCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"; 
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

// Limit to 40 products per page to show 10 rows with 4 products each
const PRODUCTS_PER_PAGE = 40;

const AllProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? store_products
      : store_products.filter(
          (product: IProductData) => product.category === selectedCategory
        );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  
  // const displayedProducts = filteredProducts.slice(
  //   (currentPage - 1) * PRODUCTS_PER_PAGE,
  //   currentPage * PRODUCTS_PER_PAGE
  // );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const pageLinks = [];
    const visiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let page = startPage; page <= endPage; page++) {
      pageLinks.push(
        <PaginationItem key={page}>
          <PaginationLink
            onClick={() => handlePageChange(page)}
            isActive={currentPage === page}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (startPage > 1) {
      pageLinks.unshift(
        <PaginationItem key="ellipsis-start">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      pageLinks.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    return pageLinks;
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

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {renderPaginationItems()}
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AllProductsPage;
