import { create } from "zustand";

import { IAuthStore } from "@/models/auth.model";

export const useAuthStore = create<IAuthStore>(() => ({
  isAdmin: false,
  isAuth: false,
}));
