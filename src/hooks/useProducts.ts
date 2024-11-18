import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the interface for the store
export interface IAuthStore {
  isLoading: boolean;
  isAdmin: boolean;
  isAuth: boolean;
  token: string;
  user: any;
  login: (isAdmin: boolean, isAuth: boolean, token: string, user: any) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create(
  persist(
    (set) => ({
      isLoading: false,
      isAdmin: false,
      isAuth: false,
      token: "",
      user: {},

      login: (isAdmin: boolean, isAuth: boolean, token: string, user: any) => {
        set({ isAuth, isAdmin, token, user }); // Update the state
      },

      logout: () => {
        set({ isAuth: false, isAdmin: false, token: "", user: {} });
      },

      setLoading: (loading: boolean) => set(() => ({ isLoading: loading })),
    }),
    {
      name: "user-storage",
      storage: {
        getItem: (key: string) => {
          const item = localStorage.getItem(key);
          return item ? JSON.parse(item) : null; // Parse the stored JSON (if any)
        },
        setItem: (key: string, value: any) => {
          localStorage.setItem(key, JSON.stringify(value)); // Store data as JSON string
        },
        removeItem: (key: string) => {
          localStorage.removeItem(key); // Remove the item from localStorage
        },
      },
    }
  )
);
