import React from "react";

import { useGeneralStore } from "@/hooks/state/store/useGeneralStore";

const CategorySection: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useGeneralStore();

  const categories = [
    { category: "Mobile" },
    { category: "Cosmestics" },
    { category: "Electronics" },
    { category: "Furniture" },
    { category: "Watches" },
    { category: "Decor" },
    { category: "Accessories" },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="mt-10 mb-10">
        <div className="flex justify-between">
          <h1 className="text-2xl text-store-heading font-semibold border-b-2 border-store-primary">
            Our <span className="text-store-primary">Categories</span>
          </h1>
        </div>
        <hr />
      </div>
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <div key={index} className="p-2">
            <div
              onClick={() => handleCategoryClick(category.category)}
              className={`container group hover:cursor-pointer ${
                category.category === selectedCategory
                  ? "border-store-primary shadow-md"
                  : ""
              }`}
            >
              <img
                src="/image 3 (1).png"
                alt={category.category}
                className={`rounded-full w-28 h-28 border group-hover:border-store-primary group-hover:shadow mr-6 ${
                  category.category === selectedCategory
                    ? "border-store-primary shadow-md"
                    : ""
                }`}
              />
              <p
                className={`text-center group-hover:font-semibold ${
                  category.category === selectedCategory ? "font-semibold" : ""
                }`}
              >
                {category.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

