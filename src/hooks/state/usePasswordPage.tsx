import { create } from "zustand";

interface PasswordPageStore {
  currentPageIndex: number;
  setCurrentPageIndex: (index: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  setInputValue: (inputValue: string) => void;
  setError: (error: string) => void;
  inputValue: string;
  error: string;
}

export const usePasswordPage = create<PasswordPageStore>((set) => ({
  currentPageIndex: 0,
  setCurrentPageIndex: (index) => set({ currentPageIndex: index }),
  nextPage: () =>
    set((state) => ({ currentPageIndex: state.currentPageIndex + 1 })),
  previousPage: () =>
    set((state) => ({
      currentPageIndex: Math.max(state.currentPageIndex - 1, 0),
    })),
  inputValue: "",
  setInputValue: (inputValue: string) => set({ inputValue }),
  error: "",
  setError: (error: string) => set({ error }),
}));
