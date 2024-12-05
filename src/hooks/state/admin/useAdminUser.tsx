import { create } from "zustand";

import { IAdminUserStore, IUser } from "@/models/admin.model";

export const useAdminUserStore = create<IAdminUserStore>((set) => {
  return {
    users: [],
    setUsers: (users: IUser[]) => set({ users }),
    clearUsers: () => set({ users: [] }),
  };
});
