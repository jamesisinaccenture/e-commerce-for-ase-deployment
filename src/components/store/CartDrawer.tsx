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

const sampleItems = [
  {
    itemId: "1",
    title: "Item 1",
    description: "Description of item 1",
    image: "/iphone.png",
    price: 20,
  },
  {
    itemId: "2",
    title: "Item 2",
    description: "Description of item 2",
    image: "/iphone.png",
    price: 30,
  },
];
const CartDrawer = () => {
  return (
    <Drawer>
      {/* Trigger Icon */}
      <DrawerTrigger asChild>
        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
          <ShoppingCart
            size={18}
            color="#008ECC"
            className="hover:cursor-pointer "
          />
          <h4 className="text-sm hidden md:inline-block md:text-lg font-semibold">
            Cart
          </h4>
        </div>
      </DrawerTrigger>

      <DrawerContent className="w-[400px] h-screen">
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>Shopping Cart</DrawerTitle>
            <DrawerDescription>Your selected items</DrawerDescription>
          </DrawerHeader>

          {/* Cart Items */}
          {sampleItems.map((item) => (
            <div key={item.itemId} className="my-4">
              <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />

                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>

                <p className="text-sm font-bold">${item.price}</p>
              </div>
            </div>
          ))}

          {/* Footer Actions */}
          <DrawerFooter className="mt-6 flex justify-between">
            <DrawerClose asChild>
              <Button variant="outline">Continue Shopping</Button>
            </DrawerClose>
            <Button asChild>
              <Link to="/checkout">Checkout</Link>
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
