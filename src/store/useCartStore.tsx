import { create } from "zustand";

import { CartState } from "@/models/store.model";

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => {
    const existingItem = state.cartItems.find(
      (cartItem) => cartItem.product_id === item.product_id
    );

    if (existingItem) {
      // If the item exists, increase its quantity
      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.product_id === item.product_id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    }

    // If the item does not exist, add it with a default quantity of 1
    return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
  }),
  removeFromCart: (product_id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.product_id !== product_id),
    })),
  increaseQuantity: (product_id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.product_id === product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),
  decreaseQuantity: (product_id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.product_id === product_id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
  removeAll: () => set({ cartItems: [] }),
}));

