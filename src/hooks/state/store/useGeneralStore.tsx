import { create }  from "zustand";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
  
  
}

export const useGeneralStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
  selectedCategory: "",
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
}));
