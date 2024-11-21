import { ShoppingCart, Trash2 } from "lucide-react"; // Import Trash2 icon for remove button
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
import { useCartStore } from "@/store/useCartStore";

const CartDrawer = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeAll = useCartStore((state) => state.removeAll);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
          <ShoppingCart size={18} color="#008ECC" />
          <h4 className="text-sm hidden md:inline-block md:text-lg font-semibold">Cart</h4>
        </div>
      </DrawerTrigger>

      <DrawerContent className="w-[400px] h-screen flex flex-col">
        <div className="mx-auto w-full flex-1 flex flex-col">
          <DrawerHeader>
            <DrawerTitle>Shopping Cart</DrawerTitle>
            <DrawerDescription>Your selected items</DrawerDescription>
          </DrawerHeader>

          {/* Cart Items with scrolling */}
          <div className="overflow-y-auto flex-1 max-h-[calc(85vh-220px)]"> {/* Adjust height for scrolling */}
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.product_id} className="my-4">
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md space-y-2">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.product_img}
                        alt={item.product_name}
                        className="w-10 h-10 object-cover rounded-md"
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
                    <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    <Button variant="outline" onClick={() => removeFromCart(item.product_id)} className="p-1 rounded-md">
                      <Trash2 size={18} color="#D92D2A" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="flex justify-center mt-2">
            <Link to="/store/cart" className="text-black-500 hover:underline cursor-pointer">
              View All Items
            </Link>
          </div>
          <DrawerFooter className="mt-6 flex justify-between">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Total Quantity: {totalQuantity}</p>
              <p className="text-lg font-bold">Total Price: ${totalPrice}</p>
            </div>
            
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
