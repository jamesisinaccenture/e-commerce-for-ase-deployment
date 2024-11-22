import { Camera } from "lucide-react";
import { useForm } from "react-hook-form";

// import { Link } from "react-router-dom";
import profileImage from "@/assets/images/profile-image.jpg";
import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuthStore } from "@/hooks/state/useAuth";
import { toast } from "@/hooks/use-toast";
import { UpdateInformationFormData } from "@/models/auth.model";
import { updateInformationSchema } from "@/schema/authSchema";
import { updateInformationService } from "@/services/auth/authService";

import { zodResolver } from "@hookform/resolvers/zod";

const UpdateInformationSettingsPage = () => {
  const { updateUserInfo, user } = useAuthStore();

  const form = useForm<UpdateInformationFormData>({
    resolver: zodResolver(updateInformationSchema),
    defaultValues: user,
  });

  const onSubmit = async (data: UpdateInformationFormData) => {
    console.log("Form updated with data:", data);

    try {
      const response = await updateInformationService(data);
      const updatedDetails = response?.data?.sanitizedUserData[0];

      if (!updatedDetails) {
        toast({
          variant: "destructive",
          title: "Update user failed",
          description: "Something went wrong.",
        });
        return;
      }

      updateUserInfo(updatedDetails);
      toast({
        variant: "success",
        title: "Edited successfully!",
        description: "Your information has been updated.",
      });
    } catch (error) {
      console.log("update user error", error);
      toast({
        variant: "destructive",
        title: "Update user failed",
        description: "Something went wrong.",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center items-center py-16"
        >
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <div className=" mb-8">
                <FormLabel className="text-gray-600 text-3xl font-bold">
                  Update Information Settings
                </FormLabel>
              </div>
              <div className="relative h-28 w-auto group">
                <div className="w-full">
                  <img
                    src={profileImage}
                    alt="Profile Image"
                    className="rounded-full max-h-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <div className="opacity-0 group-hover:opacity-100">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <Camera />
                  </Button>
                </div>
              </div>
            </div>
            <div className=" w-full flex flex-col">
              <div className=" mb-8">
                <FormLabel className="text-gray-600 text-xl font-bold">
                  User Details
                </FormLabel>
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="user_id"
                  render={({ field }) => (
                    <FormControl>
                      <CustomInput type="hidden" {...field} />
                    </FormControl>
                  )}
                />
              </div>
              <div className="grid grid-cols-custom gap-5">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">Firstname</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">Lastname</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">Address</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact_number"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">
                        Contact Number
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="w-full">
              <div className=" mb-8">
                <FormLabel className="text-gray-600 text-xl font-bold">
                  Account Information
                </FormLabel>
              </div>
              <div className="grid grid-cols-custom gap-5">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">Username</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">Email</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="email"
                          label=""
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                {/* <FormField
                  control={form.control}
                  name="date_created"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">
                        Date Created
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-full"
                          disabled
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                {/* <FormField
                  control={form.control}
                  name="old_password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">
                        Old Password
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="password"
                          label=""
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="new_password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">
                        New Password
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="password"
                          label=""
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirm_new_password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-500">
                        Confirm New Password
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="password"
                          label=""
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>
            </div>
            <div className="flex ">
              <Button
                type="submit"
                className="bg-store-primary hover:bg-store-primary/80"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UpdateInformationSettingsPage;
