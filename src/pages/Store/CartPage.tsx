import React, { useState } from 'react';
import { MinusCircle, PlusCircle, ShoppingCart, XSquare } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Product } from '@/models/auth.model';

interface CartItem extends Product {
  quantity: number;
}

const QuantityControl: React.FC<{
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  onManualChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ quantity, onDecrease, onIncrease, onManualChange }) => (
  <div className="flex items-center justify-center space-x-2">
    <Button 
      variant="outline" 
      size="icon"
      onClick={onDecrease}
      className="h-10 w-10 bg-blue-500 text-white"
    >
      <MinusCircle className="h-5 w-5" />
    </Button>
    <Input
      type="number"
      value={quantity}
      onChange={onManualChange}
      className="w-16 text-center h-10"
      min="1"
    />
    <Button 
      variant="outline" 
      size="icon"
      onClick={onIncrease}
      className="h-10 w-10 bg-blue-500 text-white"
    >
      <PlusCircle className="h-5 w-5" />
    </Button>
  </div>
);

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product_id: "P001",
      product_name: "Wireless Earbuds",
      product_img: "https://example.com/images/earbuds.jpg",
      price: 59.99,
      quantity: 2,
      currency: "USD",
      category: "",
      product_description: "High-quality wireless earbuds with noise cancellation.",
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
      product_description: "Smartwatch with heart-rate monitoring and fitness tracking.",
      date_created: "",
      created_by: "SmartTech",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CartItem | null>(null);

  const openProductModal = (product: CartItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalProducts = cartItems.length;

  const handleQuantityChange = (product_id: string, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.product_id === product_id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const handleManualQuantityChange = (product_id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10) || 1;
    handleQuantityChange(product_id, value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.product_id} className="grid grid-cols-12 gap-4 items-center bg-white p-4 rounded-lg">
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
                    <p className="text-sm text-gray-500">Category: {item.category}</p>
                    <p className="text-sm text-gray-500">Created by: {item.created_by}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <QuantityControl
                  quantity={item.quantity}
                  onDecrease={() => handleQuantityChange(item.product_id, item.quantity - 1)}
                  onIncrease={() => handleQuantityChange(item.product_id, item.quantity + 1)}
                  onManualChange={(e) => handleManualQuantityChange(item.product_id, e)}
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
      <div className="flex justify-between items-center border-t pt-4">
        <div className="text-gray-600">
          Total of <span className="text-blue-500 font-medium">{totalProducts}</span> Products
          <p className="font-medium">Total Price: <span className="text-blue-500">{cartItems[0].currency} ${totalPrice.toFixed(2)}</span></p>
        </div>
        <Button 
          size="lg"
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => {/* Implement checkout functionality */}}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Check out
        </Button>
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button 
              onClick={closeProductModal}
              className="absolute top-2 right-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            >
              <XSquare className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-medium">{selectedProduct.product_name}</h2>
            <img
              src={selectedProduct.product_img}
              alt={selectedProduct.product_name}
              className="w-32 h-32 object-cover my-4"
            />
            <p>{selectedProduct.product_description || "No description available."}</p>
            <p className="font-medium text-lg">
              {selectedProduct.currency} ${selectedProduct.price.toFixed(2)}
            </p>

            {/* Centered Quantity Control in Modal */}
            <div className="flex justify-center mt-6">
              <QuantityControl
                quantity={selectedProduct.quantity}
                onDecrease={() => handleQuantityChange(selectedProduct.product_id, selectedProduct.quantity - 1)}
                onIncrease={() => handleQuantityChange(selectedProduct.product_id, selectedProduct.quantity + 1)}
                onManualChange={(e) => handleManualQuantityChange(selectedProduct.product_id, e)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
