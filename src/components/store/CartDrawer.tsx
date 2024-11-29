import { useState } from "react";
import defaultImage from "/image 3.png"; // Static image
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { CartItem } from "@/models/store.model";
import { useCartStore } from "@/hooks/state/store/useCartStore";

const CartDrawer = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeAll = useCartStore((state) => state.removeAll);

  const [itemToRemove, setItemToRemove] = useState<CartItem | null>(null);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleDecreaseQuantity = (item: CartItem) => {
    if (item.quantity === 1) {
      setItemToRemove(item);
    } else {
      decreaseQuantity(item.product_id);
    }
  };

  const handleRemove = (productId: string) => {
    if (productId) {
      removeFromCart(productId);
      setItemToRemove(null);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex flex-row items-center gap-2 hover:cursor-pointer hover:bg-gray-300/80 p-2 rounded">
          <ShoppingCart
            size={18}
            color="#008ECC"
            className="hover:cursor-pointer "
          />
          <h4 className="text-sm hidden md:inline-block">Cart</h4>
        </div>
      </DrawerTrigger>

      <DrawerContent className="w-[400px] h-screen flex flex-col">
        <div className="mx-auto w-full flex-1 flex flex-col">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold">
              Cart<span className="text-store-primary">Mobile</span>
            </DrawerTitle>
            <DrawerDescription>Your selected items</DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto flex-1 max-h-[calc(85vh-220px)]">
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.product_id} className="my-4">
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md space-y-2">
                    <div className="flex items-center space-x-4">
                      <img
                        src={defaultImage}
                        alt={item.product_name}
                        className="w-10 h-10 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="text-sm font-semibold">
                          {item.product_name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecreaseQuantity(item)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-store-primary text-white hover:bg-blue-600"
                      >
                        -
                      </button>

                      <div className="bg-white rounded-full px-6 py-1 shadow-md">
                        <p className="text-sm font-medium">{item.quantity}</p>
                      </div>

                      <button
                        onClick={() => increaseQuantity(item.product_id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-store-primary text-white hover:bg-blue-600"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-center mt-2">
            <Link
              to="/store/cart"
              className="text-store-primary hover:underline cursor-pointer"
            >
              View All Items
            </Link>
          </div>

          <DrawerFooter className="mt-6 flex justify-between">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">
                Total Quantity:{" "}
                <span className="text-store-primary">{totalQuantity}</span>
              </p>
              <p className="text-lg font-bold">
                Total Price:{" "}
                <span className="text-store-primary">${totalPrice}</span>
              </p>
            </div>

            <DrawerClose asChild>
              <Button variant="outline">Continue Shopping</Button>
            </DrawerClose>
            <Button
              asChild
              className="bg-store-primary text-white hover:bg-blue-600 p-2 rounded-md"
              onClick={removeAll}
            >
              <Link to="/checkout">Checkout</Link>
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
      {itemToRemove && (
        <Dialog
          open={true}
          onOpenChange={(open) => !open && setItemToRemove(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Are you sure you want to delete this item?
              </DialogTitle>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setItemToRemove(null)}>
                Cancel
              </Button>
              <Button
                className="bg-red-500 text-white hover:bg-red-600"
                onClick={() => handleRemove(itemToRemove.product_id)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </Drawer>
  );
};

export default CartDrawer;
