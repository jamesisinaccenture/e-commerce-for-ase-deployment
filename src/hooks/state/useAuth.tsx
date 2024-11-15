/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

import { IAuthStore } from "@/models/auth.model";

export const useAuthStore = create<IAuthStore>((set) => ({
  isLoading: false,
  isAdmin: JSON.parse(localStorage.getItem("isAdmin") || "false"),
  isAuth: JSON.parse(localStorage.getItem("isAuth") || "false"),
  token: JSON.parse(localStorage.getItem("token") || "{}"),
  user: {},
  updateUserInfo: (user: any) => {
    sessionStorage.setItem("session", JSON.stringify(user));
  },
  login: (isAdmin: boolean, isAuth: boolean, token: string, user: any) => {
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("session", JSON.stringify(user));
    set({ isAuth, isAdmin, token, user: user });
  },
  logout: () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("token");
    localStorage.removeItem("session");
    set({ isAuth: false, isAdmin: false });
  },
  setLoading: (loading: boolean) => set(() => ({ isLoading: loading })),
}));
