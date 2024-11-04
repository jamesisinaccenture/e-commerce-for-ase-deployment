import { IAuthStore } from "@/models/auth.model";
import { create } from "zustand";

export const useAuthStore = create<IAuthStore>(() => ({
  isAdmin: false,
  isAuth: false,
}));
