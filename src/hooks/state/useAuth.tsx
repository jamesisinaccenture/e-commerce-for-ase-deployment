import { create } from "zustand";

import { IAuthStore } from "@/models/auth.model";

export const useAuthStore = create<IAuthStore>((set) => ({
  isLoading: false,
  isAdmin: JSON.parse(sessionStorage.getItem("isAdmin") || "false"),
  isAuth: JSON.parse(sessionStorage.getItem("isAuth") || "false"),
  token: JSON.parse(sessionStorage.getItem("token") || "{}"),
  user: {},
  login: (isAdmin: boolean, isAuth: boolean, token: string, user: any) => {
    sessionStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    sessionStorage.setItem("isAuth", JSON.stringify(isAuth));
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("session", JSON.stringify(user));
    set({ isAuth, isAdmin, token, user: user });
  },
  logout: () => {
    sessionStorage.removeItem("isAuth");
    sessionStorage.removeItem("isAdmin");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("session");
    set({ isAuth: false, isAdmin: false });
  },
  setLoading: (loading: boolean) => set(() => ({ isLoading: loading })),
}));
