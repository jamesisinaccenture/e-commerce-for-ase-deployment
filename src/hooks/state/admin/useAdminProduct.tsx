import { create } from "zustand";

import { IAdminProductStore, IProduct } from "@/models/admin.model";

export const useAdminProductStore = create<IAdminProductStore>((set) => {
  return {
    products: [],
    setProducts: (products: IProduct[]) => set({ products }),
    clearProducts: () => set({ products: [] }),
  };
});
