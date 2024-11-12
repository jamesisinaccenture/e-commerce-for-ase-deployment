import React, { useState } from "react";
import { ShoppingCart, XSquare } from "lucide-react";

import { QuantityControl } from "@/components/reusable/QualityControl";
import { Button } from "@/components/ui/button";
import { Product } from "@/models/auth.model";

interface CartItem extends Product {
  quantity: number;
}



// Main Cart Page component
const CartPage: React.FC = () => {
  // State to manage items in the cart
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product_id: "P001",


      product_name: "Wireless Earbuds",
      product_img: "https://example.com/images/earbuds.jpg",
      price: 59.99,
      quantity: 2,
      currency: "USD",
      category: "",
      product_description:
        "High-quality wireless earbuds with noise cancellation.",
      date_created: "",
      created_by: "TechBrand",
    },
    {
      product_id: "P003",
      product_name: "Smart Watch",
      product_img: "https://example.com/images/smart-watch.jpg",
      price: 199.99,
      quantity: 1,
      currency: "USD",
      category: "",
      product_description:
        "Smartwatch with heart-rate monitoring and fitness tracking.",
      date_created: "",
      created_by: "SmartTech",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility
  const [selectedProduct, setSelectedProduct] = useState<CartItem | null>(null); // Selected product for modal

  // Opens modal with product details
  const openProductModal = (product: CartItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Closes modal
  const closeProductModal = () => {
    setIsModalOpen(false);
  };

  // Calculate total price for all items in the cart
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // Count total number of unique products
  const totalProducts = cartItems.length;

  // Updates quantity of a specific product, prompting for confirmation if quantity reaches 0
  const handleQuantityChange = (product_id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (!confirmDelete) {
        return; // User canceled, do not update to 0
      }
    }

    setCartItems((items) => {
      const updatedItems = items
        .map((item) =>
          item.product_id === product_id
            ? { ...item, quantity: Math.max(newQuantity, 0) }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity 0 if confirmed

      // If the modal is open for this product, update selectedProduct as well
      if (selectedProduct && selectedProduct.product_id === product_id) {
        setSelectedProduct(
          updatedItems.find((item) => item.product_id === product_id) || null
        );
      }

      return updatedItems;
    });
  };

  // Updates quantity based on manual input from user
  const handleManualQuantityChange = (
    product_id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10) || 1;
    handleQuantityChange(product_id, value);
  };

  return (
    <div className="py-8">
      <h1 className="text-4xl font-medium mb-8">Cart</h1>
      <div className="mb-8">
        <div className="grid grid-cols-12 gap-4 mb-4 px-4 text-gray-600">
          <div className="col-span-6">
            <h2>Product</h2>
          </div>
          <div className="col-span-4 text-center">
            <h2>Quantity</h2>
          </div>
          <div className="col-span-2 text-right">
            <h2>Price</h2>
          </div>
        </div>

        {/* Cart items listing */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.product_id}
              className="grid grid-cols-12 gap-4 items-center bg-white p-4 rounded-lg"
            >
              <div className="col-span-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product_img}
                    alt={item.product_name}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div>
                    <h3
                      className="font-medium cursor-pointer text-blue-500"
                      onClick={() => openProductModal(item)}
                    >
                      {item.product_name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Category: {item.category}
                    </p>
                    <p className="text-sm text-gray-500">
                      Created by: {item.created_by}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                {/* Quantity control for each item */}
                <QuantityControl
                  quantity={item.quantity}
                  onDecrease={() =>
                    handleQuantityChange(item.product_id, item.quantity - 1)
                  }
                  onIncrease={() =>
                    handleQuantityChange(item.product_id, item.quantity + 1)
                  }
                  onManualChange={(e) =>
                    handleManualQuantityChange(item.product_id, e)
                  }
                />
              </div>
              <div className="col-span-2 text-right">
                <p className="font-medium">
                  {item.currency} ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart summary and checkout button */}
      <div className="flex justify-between items-center border-t pt-4">
        <div className="text-gray-600">
          Total of{" "}
          <span className="text-blue-500 font-medium">{totalProducts}</span>{" "}
          Products
          <p className="font-medium">
            Total Price:{" "}
            <span className="text-blue-500">
              {cartItems[0].currency} ${totalPrice.toFixed(2)}
            </span>
          </p>
        </div>
        {/* Checkout button (functionality to be implemented) */}
        <Button
          size="lg"
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => {
            /* Implement checkout functionality */
          }}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Check out
        </Button>
      </div>

      {/* Modal for selected product details */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            {/* Close modal button */}
            <button
              onClick={closeProductModal}
              className="absolute top-2 right-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            >
              <XSquare className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-medium">
              {selectedProduct.product_name}
            </h2>
            <img
              src={selectedProduct.product_img}
              alt={selectedProduct.product_name}
              className="w-32 h-32 object-cover my-4"
            />
            <p>
              {selectedProduct.product_description ||
                "No description available."}
            </p>
            <p className="font-medium text-lg">
              {selectedProduct.currency} ${selectedProduct.price.toFixed(2)}
            </p>

            {/* Centered Quantity Control in Modal */}
            <div className="flex justify-center mt-6">
              <QuantityControl
                quantity={selectedProduct.quantity}
                onDecrease={() =>
                  handleQuantityChange(
                    selectedProduct.product_id,
                    selectedProduct.quantity - 1
                  )
                }
                onIncrease={() =>
                  handleQuantityChange(
                    selectedProduct.product_id,
                    selectedProduct.quantity + 1
                  )
                }
                onManualChange={(e) =>
                  handleManualQuantityChange(selectedProduct.product_id, e)
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
