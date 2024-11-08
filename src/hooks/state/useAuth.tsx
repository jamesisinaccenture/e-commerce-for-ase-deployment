import { IAuthStore } from "@/models/auth.model";
import { create } from "zustand";

export const useAuthStore = create<IAuthStore>((set) => ({
  isLoading: false,
  // Initialize the state from sessionStorage if available
  isAdmin: JSON.parse(sessionStorage.getItem("isAdmin") || "false"),
  isAuth: JSON.parse(sessionStorage.getItem("isAuth") || "false"),
  login: (isAdmin: boolean, isAuth: boolean) => {
    sessionStorage.setItem("isAdmin", JSON.stringify(isAdmin)); // Store 'isAdmin' in sessionStorage
    sessionStorage.setItem("isAuth", JSON.stringify(isAuth)); // Store 'isAuth' in sessionStorage
    set({ isAuth, isAdmin });
  },
  logout: () => {
    sessionStorage.removeItem("isAuth"); // Remove 'isAuth' from sessionStorage
    sessionStorage.removeItem("isAdmin"); // Remove 'isAdmin' from sessionStorage
    set({ isAuth: false, isAdmin: false }); // Reset state
  },
  setLoading: (loading: boolean) => set(() => ({ isLoading: loading })), // Set loading states
}));
