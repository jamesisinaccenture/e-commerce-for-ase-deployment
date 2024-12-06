import { useToast } from "@/hooks/use-toast";

import { ICheckoutShippingAddress } from "@/models/store.model";
import { useCheckoutStore } from "@/hooks/state/store/useCheckout";

export const useCheckoutService = () => {
  const { toast } = useToast();
  const { shippingAddresses, setShippingAddresses } = useCheckoutStore();
  const localCheckoutShipping = "checkout_shipping_items"; // will be remove in the future

  // Fetch shipping adresses
  const fetchShippingAddress = () => {
    const data = JSON.parse(
      localStorage.getItem(localCheckoutShipping) || "[]"
    );

    if (data.length) {
      setShippingAddresses(data);
    } else {
      localStorage.setItem(localCheckoutShipping, JSON.stringify([]));
      setShippingAddresses([]);
    }
  };

  // Add new shipping address
  const addShippingAddress = (data: ICheckoutShippingAddress) => {
    // Will update in the future, instead of manual id
    data.id = `${shippingAddresses.length + 1}`;
    const newShippingAddresses = [...shippingAddresses, data];

    localStorage.setItem(
      localCheckoutShipping,
      JSON.stringify(newShippingAddresses)
    );

    setShippingAddresses(newShippingAddresses);
    toast({
      variant: "success",
      title: "Shipping address successfully added!",
    });
  };

  const updateShippingAddress = (data: ICheckoutShippingAddress) => {
    const updatedAddresses = shippingAddresses.map((address) =>
      address.id === data.id ? data : address
    );
    localStorage.setItem(
      localCheckoutShipping,
      JSON.stringify(updatedAddresses)
    );

    setShippingAddresses(updatedAddresses);
    toast({
      variant: "success",
      title: "Shipping address successfully updated!",
    });
  };

  return {
    addShippingAddress,
    fetchShippingAddress,
    updateShippingAddress,
  };
};
