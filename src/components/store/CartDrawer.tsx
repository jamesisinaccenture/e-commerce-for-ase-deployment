import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useCartStore } from "@/store/useCartStore"; // Import the store properly

const CartDrawer = () => {
  const cartItems = useCartStore((state) => state.cartItems);  // Access cartItems
  const removeFromCart = useCartStore((state) => state.removeFromCart);  // Access removeFromCart
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);  // Access increaseQuantity
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);  // Access decreaseQuantity
  const removeAll = useCartStore((state) => state.removeAll);  // Access removeAll

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
          <ShoppingCart size={18} color="#008ECC" />
          <h4 className="text-sm hidden md:inline-block md:text-lg font-semibold">Cart</h4>
        </div>
      </DrawerTrigger>

      <DrawerContent className="w-[400px] h-screen">
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>Shopping Cart</DrawerTitle>
            <DrawerDescription>Your selected items</DrawerDescription>
          </DrawerHeader>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.product_id} className="my-4">
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.product_img}
                      alt={item.product_name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">{item.product_name}</h3>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button onClick={() => decreaseQuantity(item.product_id)}>-</Button>
                    <p>{item.quantity}</p>
                    <Button onClick={() => increaseQuantity(item.product_id)}>+</Button>
                  </div>
                  <p className="text-sm font-bold">${item.price * item.quantity}</p>
                  <Button variant="outline" onClick={() => removeFromCart(item.product_id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))
          )}

          {/* Footer Actions */}
          <DrawerFooter className="mt-6 flex justify-between">
            <DrawerClose asChild>
              <Button variant="outline">Continue Shopping</Button>
            </DrawerClose>
            <Button asChild onClick={removeAll}>
              <Link to="/checkout">Checkout</Link>
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;

