import { ShoppingBasket } from "lucide-react";
import { useForm } from "react-hook-form";

import CustomFormItem from "@/components/reusable/CustomFormItem";
import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
import { FormField, Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { closeModal, imageToBlob } from "@/lib/utils";
import { IProduct } from "@/models/admin.model";
import { productFormSchema } from "@/schema/adminSchema";
import { useProductServices } from "@/services/admin/productServices";
import { DialogClose } from "@radix-ui/react-dialog";
import DropImageInput from "../DropImageInput";

import { zodResolver } from "@hookform/resolvers/zod";

interface IUpdateProductForm {
  product: IProduct;
}

const UpdateProductForm = ({ product }: IUpdateProductForm) => {
  const form = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      product_id: product.product_id,
      product_name: product.product_name,
      product_img: product.product_img,
      product_description: product.date_created,
      category: product.category,
      price: product.price,
      currency: product.currency,
    },
  });

  const { updateProduct, isLoading } = useProductServices();

  const onSubmit = (data: IProduct) => updateProduct(data, closeModal);

  return (
    <div>
      <div className="flex gap-2 items-center my-2">
        <ShoppingBasket />
        <h1 className="font-bold text-lg">Add new products</h1>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 overflow-auto max-h-[30rem]">
              <FormField
                control={form.control}
                name="product_id"
                render={({ field }) => <input type="hidden" {...field} />}
              />
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
                  <CustomFormItem label="Category">
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
                render={({ field }) => {
                  const { onChange } = field;
                  return (
                    <CustomFormItem label="Product image">
                      <DropImageInput
                        onImageDrop={async (file) => {
                          try {
                            const blob = await imageToBlob(file);
                            onChange(blob);
                          } catch (error) {
                            toast({
                              variant: "destructive",
                              title: "Error uploading image",
                              description: "Please try again.",
                            });
                          }
                        }}
                        value={field.value}
                      />
                    </CustomFormItem>
                  );
                }}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <DialogClose asChild>
                <Button
                  id="closeModal"
                  type="button"
                  onClick={() => {
                    form.reset();
                  }}
                  variant="ghost"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isLoading}>
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProductForm;
