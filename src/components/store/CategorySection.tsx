import React from "react";

import { useSearchStore } from "@/store/useSearchStore"; 

//import sampleImage from "@/assets/images/wireless airpods.jpg";
const products = [
  {
    product_id: "P001",
    product_name: "Wireless Earbuds",
    product_img: "/image 3 (1).png",
    product_description:
      "High-quality wireless earbuds with noise cancellation.",
    category: "Mobile",
    price: 59.99,
    currency: "USD",
    sold: 120,
    date_created: "2024-01-15",
    created_by: "JohnDoe",
  },
  {
    product_id: "P002",
    product_name: "Gaming Laptop",
    product_img: "/image b..png",
    product_description: "Powerful laptop for gaming with RGB keyboard.",
    category: "Cosmetics",
    price: 1299.99,
    currency: "USD",
    sold: 45,
    date_created: "2024-02-20",
    created_by: "JaneSmith",
  },
  {
    product_id: "P003",
    product_name: "Smart Watch",
    product_img: "/image e..png",
    product_description:
      "Water-resistant smartwatch with health tracking features.",
    category: "Electronics",
    price: 199.99,
    currency: "USD",
    sold: 350,
    date_created: "2024-03-01",
    created_by: "EmilyBrown",
  },
  {
    product_id: "P004",
    product_name: "Electric Toothbrush",
    product_img: "/image c..png",
    product_description:
      "Rechargeable toothbrush with multiple cleaning modes.",
    category: "Furniture",
    price: 49.99,
    currency: "USD",
    sold: 230,
    date_created: "2024-03-15",
    created_by: "ChrisJohnson",
  },
  {
    product_id: "P005",
    product_name: "4K TV",
    product_img: "/image w..png",
    product_description: "55-inch smart 4K Ultra HD TV with HDR support.",
    category: "Watches",
    price: 599.99,
    currency: "USD",
    sold: 110,
    date_created: "2024-04-05",
    created_by: "AlexLee",
  },
  {
    product_id: "P006",
    product_name: "Portable Bluetooth Speaker",
    product_img: "/image d..png",
    product_description: "Waterproof portable speaker with deep bass.",
    category: "Decor",
    price: 39.99,
    currency: "USD",
    sold: 275,
    date_created: "2024-04-10",
    created_by: "SophiaDavis",
  },
  {
    product_id: "P007",
    product_name: "Digital Camera",
    product_img: "/image a..png",
    product_description: "Compact digital camera with 20x zoom.",
    category: "Accesories",
    price: 349.99,
    currency: "USD",
    sold: 60,
    date_created: "2024-04-22",
    created_by: "LiamMartinez",
  },
];

const CategorySection: React.FC = () => {
  const { query } = useSearchStore(); // Access global query state
  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes(query) ||
      product.product_name.toLowerCase().includes(query)
  );

  const categories = [
    ...new Set(filteredProducts.map((product) => product.category)),
  ];

  return (
    <>
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
            <div key={index}>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div
                    key={product.product_id}
                    className="container p-2 group hover:cursor-pointer"
                  >
                    <img
                      //src={sampleImage}
                      src={product.product_img}
                      alt={product.product_name}
                      className="rounded-full w-28 h-28 group-hover:border-store-primary group-hover:shadow-md border"
                    />
                    <p className="text-center group-hover:font-semibold">
                      {category}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySection;
