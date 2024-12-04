import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";

import CustomFormItem from "@/components/reusable/CustomFormItem";
import CustomInput from "@/components/reusable/CustomInput";
import { CustomSelect } from "@/components/reusable/CustomSelect";
import { Button } from "@/components/ui/button";
import { FormField, Form } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { closeModal, imageToBlob } from "@/lib/utils";
import { IUser, IUpdateUserPayload } from "@/models/admin.model";
import { userFormSchema } from "@/schema/adminSchema";
import { useUserServices } from "@/services/admin/userServices";
import { DialogClose } from "@radix-ui/react-dialog";
import DropImageInput from "../DropImageInput";

import { zodResolver } from "@hookform/resolvers/zod";

interface IUpdateUserForm {
  user: IUser;
  updateUser: (updatedUser: IUpdateUserPayload) => void;
}

const UpdateUserForm = ({ user }: IUpdateUserForm) => {
  const form = useForm({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      contact_number: user.contact_number,
      address: user.address,
      username: user.username,
      password: user.password,
      access_level: user.access_level,
      user_img: user.user_img,
      user_id: user.user_id,
      position: user.position,
      department: user.department,
      branch: user.branch,
      status: user.status,
    },
  });

  const accessLevelList = [
    { label: "User", value: "user" },
    { label: "Admin", value: "admin" },
  ];

  const { updateUser, isLoading } = useUserServices();

  const onSubmit = (data: IUpdateUserPayload) => {
    updateUser(data, closeModal);
  };

  return (
    <div className="relative max-h-[90vh] overflow-hidden flex flex-col">
      <div className="flex gap-2 items-center my-2 sticky top-0 bg-white z-10 p-4 shadow-sm">
        <UserPlus />
        <h1 className="font-bold text-lg">Update User</h1>
      </div>
      
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="user_id"
                render={({ field }) => (
                  <CustomFormItem label="User ID">
                    <CustomInput
                      className="w-full"
                      value={field.value}
                      disabled
                    />
                  </CustomFormItem>
                )}
              />
            </div>
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
            <div className="flex justify-between gap-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <CustomFormItem label="Username*">
                    <CustomInput
                      label="Username"
                      className="w-full"
                      value={field.value}
                      disabled
                    />
                  </CustomFormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <CustomFormItem label="Password*">
                    <CustomInput
                      type="password"
                      label="Password"
                      isRequired
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
                  <CustomInput label="Address" {...field} />
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
                      items={accessLevelList}
                      defaultValue={field.value}
                      placeholder="Access Level"
                      onChange={(value: string) => field.onChange(value)}
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
                    <CustomInput label="Branch" className="w-full" {...field} />
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
              render={({ field }) => {
                const { onChange, value } = field;

                const imageValue =
                  typeof value === "string" ? value : undefined;

                return (
                  <CustomFormItem label="User image">
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
                      value={imageValue}
                    />
                  </CustomFormItem>
                );
              }}
            />
          </form>
        </Form>
      </div>

      {/* Sticky footer with Cancel and Edit buttons */}
      <div className="sticky bottom-0 flex gap-2 justify-end p-4 bg-white z-10 shadow-sm">
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
          {isLoading ? "Processing..." : "Edit"}
        </Button>
      </div>
    </div>
  );
};

export default UpdateUserForm;
