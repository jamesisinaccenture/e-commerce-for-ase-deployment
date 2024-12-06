import { create } from "zustand";

import { ICheckoutShippingAddress, ICheckoutStore } from "@/models/store.model";

export const useCheckoutStore = create<ICheckoutStore>((set) => ({
  isLoading: false,
  isCheckoutCartOpen: false,
  shippingAddresses: [],
  shippingAddressInput: {
    id: "",
    full_name: "",
    lot_house_apt: "",
    street: "",
    barangay: "",
    city: "",
    contact_number: "",
  },
  setShippingAddresses: (shippingAddresses: ICheckoutShippingAddress[]) =>
    set({ shippingAddresses }), // Set the products from fetched data
  setShippingAddressInput: (shippingAddressInput: ICheckoutShippingAddress) =>
    set({ shippingAddressInput }),
  toggleCheckoutCart: () =>
    set((state) => ({ isCheckoutCartOpen: !state.isCheckoutCartOpen })),
}));
