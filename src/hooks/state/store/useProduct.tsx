// stores/productStore.ts
import { create } from "zustand";

import { IProduct, IProductStore } from "@/models/store.model";

export const useProductStore = create<IProductStore>((set) => ({
  products: [],
  setProducts: (products: IProduct[]) => set({ products }), // Set the products from fetched data
}));
