import { create } from "zustand";

import { UpdateInformationFormDataForStore } from "@/models/auth.model";

const defaultValue = {
  user_id: "",
  first_name: "",
  last_name: "",
  address: "",
  contact_number: "",
  username: "",
  email: "",
  date_created: "",
};

export const useSettings = create<UpdateInformationFormDataForStore>((set) => ({
  data: defaultValue,
  setData: (data) => set({ data }),
}));
