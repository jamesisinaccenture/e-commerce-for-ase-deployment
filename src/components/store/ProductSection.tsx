import { useState } from "react";
import { Link } from "react-router-dom";

import ProductSectionCard from "@/components/store/ProductSectionCard";
import { useGeneralStore } from "@/hooks/state/store/useGeneralStore";
import { cn } from "@/lib/utils";
import { IProductSection } from "@/models/store.model";
import { ROUTES } from "@/routes/endpoints";
import {
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationNext,
} from "../ui/pagination";

const ProductSection = ({ products, isHome }: IProductSection) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PRODUCTS_PER_PAGE = 40;

  const searchQuery = useGeneralStore((state) => state.query);
  const selectedCategory = useGeneralStore((state) => state.selectedCategory);

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.product_name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      (Array.isArray(product.category) 
        ? product.category.some(
            (cat) =>
              typeof cat === "string" &&
              cat.toLowerCase() === selectedCategory.toLowerCase() 
          ) // Compare each category in the array
        : typeof product.category === "string" &&
          product.category.toLowerCase() === selectedCategory.toLowerCase()); 

    return matchesQuery && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

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
            className="bg-store-primary text-white"
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
    <>
      <div className="flex flex-col w-full min-h-96">
        <div className="mt-10 mb-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold border-b-2 text-store-heading border-store-primary">
              {isHome ? "Our" : "All"}{" "}
              <span className="text-store-primary">Products</span>
            </h1>
            {isHome && (
              <Link
                to={ROUTES.STORE.PRODUCTS}
                className="hover:text-store-primary"
              >
                View All
              </Link>
            )}
          </div>
          <hr />
        </div>

        <div className="grid grid-cols-custom gap-4 w-full">
          {displayedProducts.map((product) => (
            <ProductSectionCard {...product} key={product.product_id} />
          ))}
        </div>
        {!displayedProducts.length && (
          <div className="flex justify-center items-center min-h-64">
            <p>No results found.</p>
          </div>
        )}
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
              aria-disabled={currentPage === 1}
              className={cn(
                "cursor-pointer",
                currentPage === 1 && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>
          {renderPaginationItems()}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                currentPage < totalPages && handlePageChange(currentPage + 1)
              }
              aria-disabled={currentPage === totalPages}
              className={cn(
                "cursor-pointer",
                (currentPage === totalPages || filteredProducts.length < 2) &&
                  "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default ProductSection;
