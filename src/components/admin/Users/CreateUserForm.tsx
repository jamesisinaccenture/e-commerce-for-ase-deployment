import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";

import CustomFormItem from "@/components/reusable/CustomFormItem";
import CustomInput from "@/components/reusable/CustomInput";
import { CustomSelect } from "@/components/reusable/CustomSelect";
import { Button } from "@/components/ui/button";
import { FormField, Form } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { IUser } from "@/models/admin.model";
import { userFormSchema } from "@/schema/adminSchema";
import { DialogClose } from "@radix-ui/react-dialog";
import DropImageInput from "../DropImageInput";

import { zodResolver } from "@hookform/resolvers/zod";

const CreateUserForm = () => {
  const form = useForm({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      contact_number: "",
      address: "",
      date_created: "",
      username: "",
      access_level: "user",
      user_img: "",
      position: "",
      department: "",
      branch: "",
      status: 1,
    },
  });

  const accessLevelList = [
    {
      label: "User",
      value: "user",
    },
    {
      label: "Admin",
      value: "admin",
    },
  ];

  const onSubmit = (data: IUser) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex gap-2 items-center my-2">
        <UserPlus />
        <h1 className="font-bold text-lg">Add new user</h1>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 overflow-auto max-h-[30rem]">
              <div className="flex justify-between gap-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <CustomFormItem label="First name*">
                      <CustomInput
                        label="First name"
                        className="w-full"
                        {...field}
                      />
                    </CustomFormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <CustomFormItem label="Last name*">
                      <CustomInput
                        label="Last name"
                        className="w-full"
                        {...field}
                      />
                    </CustomFormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <CustomFormItem label="Address*">
                    <Textarea placeholder="Address" {...field} />
                  </CustomFormItem>
                )}
              />
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="contact_number"
                  render={({ field }) => (
                    <CustomFormItem label="Contact number*">
                      <CustomInput
                        label="Contact number"
                        className="w-full"
                        {...field}
                      />
                    </CustomFormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="access_level"
                  render={({ field }) => (
                    <CustomFormItem label="Access level" className="w-full">
                      <CustomSelect
                        triggerClassName="w-full"
                        items={accessLevelList}
                        defaultValue={field.value}
                        placeholder="Access Level"
                        onChange={(value: string) => {
                          field.onChange(value);
                        }}
                      />
                    </CustomFormItem>
                  )}
                />
              </div>
              <div className="flex justify-between gap-2">
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <CustomFormItem label="Department">
                      <CustomInput
                        label="Department"
                        className="w-full"
                        {...field}
                      />
                    </CustomFormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="branch"
                  render={({ field }) => (
                    <CustomFormItem label="Branch">
                      <CustomInput
                        label="Branch"
                        className="w-full"
                        {...field}
                      />
                    </CustomFormItem>
                  )}
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <CustomFormItem label="Position">
                        <CustomInput
                          label="Position"
                          className="w-full"
                          {...field}
                        />
                      </CustomFormItem>
                    )}
                  />
                </div>
                <div className="flex justify-center">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <CustomFormItem
                        label="Status"
                        className="flex items-center"
                      >
                        <div className="w-fit py-2">
                          <Switch
                            onCheckedChange={(checked) =>
                              field.onChange(checked ? 1 : 0)
                            }
                          />
                        </div>
                      </CustomFormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="user_img"
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
    </>
  );
};

export default CreateUserForm;
