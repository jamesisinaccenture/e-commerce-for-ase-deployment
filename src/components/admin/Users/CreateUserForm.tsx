import { useForm } from "react-hook-form";

import CustomFormItem from "@/components/reusable/CustomFormItem";
import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
import { FormField, Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { IProduct } from "@/models/admin.model";
import { productFormSchema } from "@/schema/adminSchema";
import { DialogClose } from "@radix-ui/react-dialog";
import DropImageInput from "../DropImageInput";

import { zodResolver } from "@hookform/resolvers/zod";

const CreateProductForm = () => {
  const form = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      product_name: "",
      product_img: "",
      product_description: "",
      category: "",
      price: 0,
      currency: "",
    },
  });

  const onSubmit = (data: IProduct) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Add New Products</h1>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="product_name"
                render={({ field }) => (
                  <CustomFormItem label="Product name*">
                    <CustomInput
                      label="Product"
                      className="w-full"
                      {...field}
                    />
                  </CustomFormItem>
                )}
              />
              <FormField
                control={form.control}
                name="product_description"
                render={({ field }) => (
                  <CustomFormItem label="Product description*">
                    <Textarea placeholder="Product description" {...field} />
                  </CustomFormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <CustomFormItem label="Category*">
                    <CustomInput
                      label="Category"
                      className="w-full"
                      {...field}
                    />
                  </CustomFormItem>
                )}
              />
              <div className="flex justify-between gap-2">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <CustomFormItem label="Price*">
                      <CustomInput
                        label="Price"
                        className="w-full"
                        type="number"
                        {...field}
                      />
                    </CustomFormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <CustomFormItem label="Currency*">
                      <CustomInput label="Currency" {...field} />
                    </CustomFormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="product_img"
                render={({ field }) => (
                  <CustomFormItem label="Product image">
                    <DropImageInput
                      onImageDrop={(file) => {
                        field.onChange(file);
                      }}
                      value={field.value}
                    />
                  </CustomFormItem>
                )}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <DialogClose asChild>
                <Button
                  type="button"
                  onClick={() => form.reset()}
                  variant="ghost"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateProductForm;
