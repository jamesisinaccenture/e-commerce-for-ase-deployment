import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useCheckoutService } from "@/services/store/checkoutService";
import { useCheckoutStore } from "@/hooks/state/store/useCheckout";
import { ICheckoutShippingAddress } from "@/models/store.model";

import CustomInput from "../../reusable/CustomInput";
import CustomFormItem from "@/components/reusable/CustomFormItem";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

interface ICheckoutUpdateAddressModal {
  onToggleModal: (arg?: string) => void;
  isShow: boolean;
}

const CheckoutUpdateAddressModal: React.FC<ICheckoutUpdateAddressModal> = ({
  onToggleModal,
  isShow,
}) => {
  const { shippingAddressInput } = useCheckoutStore();
  const { updateShippingAddress } = useCheckoutService();
  const form = useForm({
    defaultValues: {
      id: "",
      full_name: "",
      lot_house_apt: "",
      street: "",
      barangay: "",
      city: "",
      contact_number: "",
    },
  });

  const onSubmit = (data: ICheckoutShippingAddress) => {
    updateShippingAddress(data);
    form.reset();
    onToggleModal();
  };

  useEffect(() => {
    let defaultValues = {
      id: shippingAddressInput.id,
      full_name: shippingAddressInput.full_name,
      lot_house_apt: shippingAddressInput.lot_house_apt,
      street: shippingAddressInput.street,
      barangay: shippingAddressInput.barangay,
      city: shippingAddressInput.city,
      contact_number: shippingAddressInput.contact_number,
    };
    form.reset(defaultValues);
  }, [isShow]);

  if (!isShow) return;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold">Update Shipping Address</h1>

          <button
            className="text-xl font-bold text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => onToggleModal()}
          >
            X
          </button>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <CustomFormItem label="Full Name">
                  <CustomInput
                    label="Full Name"
                    className="w-full"
                    isRequired={true}
                    {...field}
                  />
                </CustomFormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lot_house_apt"
              render={({ field }) => (
                <CustomFormItem label="Lot/House/Apt #">
                  <CustomInput
                    label="Lot/House/Apt #"
                    isRequired={true}
                    className="w-full"
                    {...field}
                  />
                </CustomFormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <CustomFormItem label="Street">
                  <CustomInput
                    label="Street"
                    className="w-full"
                    {...field}
                    isRequired={true}
                  />
                </CustomFormItem>
              )}
            />
            <FormField
              control={form.control}
              name="barangay"
              render={({ field }) => (
                <CustomFormItem label="Barangay">
                  <CustomInput
                    label="Barangay"
                    className="w-full"
                    isRequired={true}
                    {...field}
                  />
                </CustomFormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <CustomFormItem label="City">
                  <CustomInput
                    label="City"
                    className="w-full"
                    isRequired={true}
                    {...field}
                  />
                </CustomFormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_number"
              render={({ field }) => (
                <CustomFormItem label="Contact Number">
                  <CustomInput
                    label="Contact Number"
                    className="w-full"
                    isRequired={true}
                    {...field}
                  />
                </CustomFormItem>
              )}
            />
            <Button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full mt-4"
            >
              Save
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutUpdateAddressModal;
