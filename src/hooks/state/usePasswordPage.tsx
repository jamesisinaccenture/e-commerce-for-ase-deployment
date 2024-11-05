import { create } from "zustand";

interface PasswordPageStore {
  currentPageIndex: number;
  setCurrentPageIndex: (index: number) => void;
  nextPage: () => void;
  previousPage: () => void; // Add a method for going to the previous page
}

export const usePasswordPage = create<PasswordPageStore>((set) => ({
  currentPageIndex: 0,
  setCurrentPageIndex: (index) => set({ currentPageIndex: index }),
  nextPage: () =>
    set((state) => ({ currentPageIndex: state.currentPageIndex + 1 })),
  previousPage: () =>
    set((state) => ({
      currentPageIndex: Math.max(state.currentPageIndex - 1, 0),
    })), // Ensure we don't go below 0
}));
