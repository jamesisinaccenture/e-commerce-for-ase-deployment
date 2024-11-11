import React, { useState } from "react";

interface Category {
  product_id: string;
  product_name: string;
  product_img: string;
  product_description: string;
  category: string;
}

const categories: Category[] = [
  {
    product_id: "P001",
    product_name: "Wireless Earbuds",
    product_img: "https://example.com/images/earbuds.jpg",
    product_description:
      "High-quality wireless earbuds with noise cancellation.",
    category: "Electronics",
  },
  {
    product_id: "P002",
    product_name: "Gaming Laptop",
    product_img: "https://example.com/images/gaming-laptop.jpg",
    product_description: "Powerful laptop for gaming with RGB keyboard.",
    category: "Computers",
  },
  {
    product_id: "P003",
    product_name: "Smart Watch",
    product_img: "https://example.com/images/smart-watch.jpg",
    product_description:
      "Water-resistant smartwatch with health tracking features.",
    category: "Wearables",
  },
  {
    product_id: "P004",
    product_name: "Electric Toothbrush",
    product_img: "https://example.com/images/toothbrush.jpg",
    product_description:
      "Rechargeable toothbrush with multiple cleaning modes.",
    category: "Personal Care",
  },
  {
    product_id: "P005",
    product_name: "4K TV",
    product_img: "https://example.com/images/4k-tv.jpg",
    product_description: "55-inch smart 4K Ultra HD TV with HDR support.",
    category: "Home Entertainment",
  },
  {
    product_id: "P006",
    product_name: "Portable Bluetooth Speaker",
    product_img: "https://example.com/images/speaker.jpg",
    product_description: "Waterproof portable speaker with deep bass.",
    category: "Audio",
  },
  {
    product_id: "P007",
    product_name: "Digital Camera",
    product_img: "https://example.com/images/camera.jpg",
    product_description: "Compact digital camera with 20x zoom.",
    category: "Photography",
  },
];

const CategorySection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories
          .slice(0, expanded ? categories.length : 4)
          .map((category) => (
            <div
              key={category.product_id}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={category.product_img}
                alt={category.product_name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-medium">{category.product_name}</h3>
              <p className="text-sm text-gray-600">
                {category.product_description}
              </p>
            </div>
          ))}
      </div>

      {/* Expand/Collapse Button */}
      <div className="mt-4 text-center">
        <button
          onClick={handleToggleExpand}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
