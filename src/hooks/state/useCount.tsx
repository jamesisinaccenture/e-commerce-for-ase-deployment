import { create } from "zustand";
import { CountInterface } from "@/models/store.model";

export const useCount = create<CountInterface>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })), //the state here refers to the CountInterface
  removeCount: () => set({ count: 0 }),
}));
