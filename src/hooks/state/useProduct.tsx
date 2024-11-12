// stores/productStore.ts
import { create } from "zustand";

import {
  IProductStore as ProductStoreInterface,
  IProduct as Product,
} from "@/models/store.model";

export const useProductStore = create<ProductStoreInterface>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }), // Set the products from fetched data
  addProduct: (product: Product) =>
    set((state) => ({ products: [...state.products, product] })), // Add a new single product
  clearProducts: () => set({ products: [] }), // Clear all products
}));
