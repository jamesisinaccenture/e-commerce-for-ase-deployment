import { create } from "zustand";

import { UpdateInformationFormData } from "@/models/auth.model";

export const useSettings = create<UpdateInformationFormData>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })), //the state here refers to the CountInterface
  removeCount: () => set({ count: 0 }),
}));
