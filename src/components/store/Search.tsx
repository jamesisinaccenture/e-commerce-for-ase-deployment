import React, { useState } from "react";

const categories = [
  "Mobile",
  "Cosmetics",
  "Electronics",
  "Furniture",
  "Watches",
  "Decor",
  "Accessories",
];

const products = [
  "test12221",
  "Samsung Galaxy S23",
  "Macbook Pro",
  "Office Chair",
  "Smart Watch",
  "Bluetooth Speaker",
  "Leather Sofa",
  "Digital Camera",
];

const Search = () => {
  const [query, setQuery] = useState(""); // Store the search query
  const [filteredCategories, setFilteredCategories] = useState(categories); // Default is all categories
  const [filteredProducts, setFilteredProducts] = useState(products); // Default is all products

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase(); // Get query in lowercase for comparison
    setQuery(value);

    // Filter categories based on query
    const filteredCategoriesList = categories.filter((category) =>
      category.toLowerCase().includes(value)
    );
    setFilteredCategories(filteredCategoriesList); // Update state with filtered categories

    // Filter products based on query
    const filteredProductsList = products.filter((product) =>
      product.toLowerCase().includes(value)
    );
    setFilteredProducts(filteredProductsList); // Update state with filtered products
  };

  return (
    <div className="w-full md:w-96">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search categories or products..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Display Filtered Categories */}
      <div className="mt-2">
        {query && (
          <div>
            <h3 className="text-lg font-semibold">Categories:</h3>
            <ul className="space-y-2">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <li key={category} className="text-lg">{category}</li>
                ))
              ) : (
                <li className="text-red-500">No categories found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Display Filtered Products */}
      <div className="mt-4">
        {query && (
          <div>
            <h3 className="text-lg font-semibold">Products:</h3>
            <ul className="space-y-2">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <li key={product} className="text-lg">{product}</li>
                ))
              ) : (
                <li className="text-red-500">No products found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;


