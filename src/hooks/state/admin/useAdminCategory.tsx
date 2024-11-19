import { create } from "zustand";

import { IAdminCategoryStore, ICategory } from "@/models/admin.model";

export const useAdminCategoryStore = create<IAdminCategoryStore>((set) => {
  return {
    category: [],
    setCategory: (category: ICategory[]) => set({ category }),
    clearCategory: () => set({ category: [] }),
  };
});
