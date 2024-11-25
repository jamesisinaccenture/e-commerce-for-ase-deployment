// stores/productStore.ts
import { create } from "zustand";

import { store_products } from "@/lib/constants";
import { IProduct, IProductStore } from "@/models/store.model";

export const useProductStore = create<IProductStore>((set) => ({
  products: store_products,
  setProducts: (products: IProduct[]) => set({ products }), // Set the products from fetched data
}));
