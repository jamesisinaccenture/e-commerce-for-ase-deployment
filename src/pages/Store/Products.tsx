import React from "react";

// Assume you have these data or fetch them from an API
const products: any[] = [
  { id: 1, name: "Product 1", category: "Electronics", price: 100 },
  { id: 2, name: "Product 2", category: "Clothing", price: 50 },
  { id: 3, name: "Product 3", category: "Electronics", price: 200 },
  { id: 4, name: "Product 4", category: "Books", price: 15 },
  // ... more products
];

const categories: any[] = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Books" },
  // ... more categories
];

const Products: React.FC = () => {
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Products by Category</h1>
      {categories.map((category) => (
        <div key={category.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productsByCategory[category.name]?.map((product: any) => (
              <div key={product.id} className="border p-4 rounded shadow">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
