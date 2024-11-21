import { create } from "zustand";

import { CartState } from "@/models/store.model";

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (product_id) => set((state) => ({
    cartItems: state.cartItems.filter((item) => item.product_id !== product_id),
  })),
  increaseQuantity: (product_id) => set((state) => ({
    cartItems: state.cartItems.map((item) =>
      item.product_id === product_id ? { ...item, quantity: item.quantity + 1 } : item
    ),
  })),
  decreaseQuantity: (product_id) => set((state) => ({
    cartItems: state.cartItems.map((item) =>
      item.product_id === product_id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
  })),
  removeAll: () => set({ cartItems: [] }),
}));
