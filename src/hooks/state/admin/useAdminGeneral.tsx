import { create } from "zustand";

import { IAdminGeneralStore } from "@/models/admin.model";

export const useAdminGeneralStore = create<IAdminGeneralStore>((set) => {
  return {
    open: false,
    setOpen: (open: boolean) => set({ open }),

    search: "",
    setSearch: (search: string) => set({ search }),
  };
});
