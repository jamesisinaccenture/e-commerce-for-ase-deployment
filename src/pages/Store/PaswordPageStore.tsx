import { create } from "zustand";

interface PasswordPageStore {
  currentPageIndex: number;
  setCurrentPageIndex: (index: number) => void;
  nextPage: () => void;
}

export const PasswordPageStore = create<PasswordPageStore>((set) => ({
  currentPageIndex: 0,
  setCurrentPageIndex: (index) => set({ currentPageIndex: index }),
  nextPage: () =>
    set((state) => ({ currentPageIndex: state.currentPageIndex + 1 })),
}));
