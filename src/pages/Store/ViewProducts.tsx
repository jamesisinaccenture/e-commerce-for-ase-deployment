import React, { useState } from "react";

interface Product {
  name: string;
  price: string;
  discount: string;
  originalPrice: string;
}

const ViewProducts: React.FC = () => {
  // Assuming we only have one product in this case
  const product: Product = {
    name: "Galaxy S23 Ultra",
    price: "$999",
    discount: "50% OFF",
    originalPrice: "$1299",
  };

  // Validation function to check if all product details are complete
  const isProductValid = () => {
    return (
      product.name && product.price && product.discount && product.originalPrice
    );
  };

  // State to manage validation error message
  const [error, setError] = useState<string | null>(null);

  const handleViewDetails = () => {
    if (!isProductValid()) {
      setError("Product details are incomplete. Cannot view details.");
    } else {
      setError(null);
      // Proceed to the details view or any other action
      alert("Product details are valid! Proceeding to view details.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header with Category Menu */}
      <header className="bg-white p-6 rounded-lg shadow-lg mb-4 flex items-center justify-between">
        <nav className="flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-blue-600 font-medium">
            Groceries
          </a>
          <a href="#" className="hover:text-blue-600 font-medium">
            Premium Fruits
          </a>
          <a href="#" className="hover:text-blue-600 font-medium">
            Home & Kitchen
          </a>
          <a href="#" className="hover:text-blue-600 font-medium">
            Fashion
          </a>
          <a href="#" className="hover:text-blue-600 font-medium">
            Electronics
          </a>
        </nav>
      </header>

      {/* All Products Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2
          className="text-2xl font-semibold text-gray-800 mb-6"
          style={{
            fontFamily: "Noto Sans HK",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "30px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          All Products
        </h2>

        {/* Product Image */}
        <div className="flex justify-center mb-6">
          <img
            src="src/assets/image 1.png"
            alt="Product with complete details"
            className="object-cover w-50 max-w-md h-auto rounded-lg shadow-xl"
          />
          <img
            src="src/assets/image 1.png"
            alt="Product with complete details"
            className="object-cover w-50 max-w-md h-auto rounded-lg shadow-xl"
          />
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* View Details Button */}
        <div className="flex justify-center">
          <button
            onClick={handleViewDetails}
            disabled={!isProductValid()}
            className={`py-2 px-6 rounded-lg transition duration-200 ease-in-out ${
              isProductValid()
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            View Details
          </button>
        </div>
      </section>
    </div>
  );
};

export default ViewProducts;
