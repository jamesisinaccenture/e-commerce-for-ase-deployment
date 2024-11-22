/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

import { IAuthStore } from "@/models/auth.model";
import { IUser } from "@/models/admin.model";

export const useAuthStore = create<IAuthStore>((set) => ({
  isLoading: false,
  isAdmin: JSON.parse(localStorage.getItem("isAdmin") || "false"),
  isAuth: JSON.parse(localStorage.getItem("isAuth") || "false"),
  token: JSON.parse(localStorage.getItem("token") || "{}"),
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  updateUserInfo: (user: IUser) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, isAdmin: user.access_level === "admin" });
  },
  login: (isAdmin: boolean, isAuth: boolean, token: string, user: any) => {
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));

    set({ isAuth, isAdmin, token, user });
  },
  logout: () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ isAuth: false, isAdmin: false });
  },
  setLoading: (loading: boolean) => set(() => ({ isLoading: loading })),
}));
