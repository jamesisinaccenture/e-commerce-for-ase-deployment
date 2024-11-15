import { useEffect, useMemo } from "react";
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
import { useSettings } from "@/hooks/state/useSettings";
import { toast } from "@/hooks/use-toast";
import { getUserSession } from "@/lib/utils";
import { UpdateInformationFormData } from "@/models/auth.model";
// import { ROUTES } from "@/routes/endpoints";
import { updateInformationSchema } from "@/schema/authSchema";
import {
  updateInformationService,
  getUserInformation,
} from "@/services/authService";

import { zodResolver } from "@hookform/resolvers/zod";

const UpdateInformationSettingsPage = () => {
  const settings = useSettings();

  const formValues = useMemo(
    () => ({
      user_id: settings.data?.user_id || "",
      first_name: settings.data?.first_name || "",
      last_name: settings.data?.last_name || "",
      address: settings.data?.address || "",
      contact_number: settings.data?.contact_number || "",
      username: settings.data?.username || "",
      // email: settings.data?.email || "",
      // date_created: settings.data?.date_created || "",
    }),
    [settings.data]
  );

  useEffect(() => {
    const data = getUserSession();
    getUserInformation();
    // console.log("getUserSession:", data);
    settings.setData(data);
  }, []);

  console.log(settings.data);

  const form = useForm<UpdateInformationFormData>({
    resolver: zodResolver(updateInformationSchema),
    defaultValues: formValues,
  });
  // console.log(form.watch("user_id"));

  const onSubmit = async (data: UpdateInformationFormData) => {
    console.log("Form updated with data:", data);

    try {
      const response = await updateInformationService(data);
      console.log(response.data);

      if (response?.data) {
        settings.setData(data);

        toast({
          variant: "success",
          title: "Edited successfully!",
          description: "Your information has been updated.",
        });
      }
    } catch (error) {
      console.log("Submit", error);
    }
  };

  useEffect(() => {
    form.reset(formValues);
  }, [formValues, form]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-wrap justify-center items-center"
        >
          <div className="mb-8">
            <div className="container mt-5">
              <div className="container mb-8 max-w-fit">
                <FormLabel className="text-gray-600 text-2xl font-bold">
                  Update Information Settings
                </FormLabel>
              </div>
              <div className="relative h-28 w-auto group">
                <div className="">
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
            <div className="container mt-5">
              <div className="container mb-8 max-w-fit">
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
              <div className="flex flex-wrap gap-5">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-500">Firstname</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-80"
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
                    <FormItem>
                      <FormLabel className="text-gray-500">Lastname</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-80"
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
                    <FormItem>
                      <FormLabel className="text-gray-500">Address</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-80"
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
                    <FormItem>
                      <FormLabel className="text-gray-500">
                        Contact Number
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-80"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="container mt-10">
              <div className="container mb-8">
                <FormLabel className="text-gray-600 text-xl font-bold">
                  Account Information
                </FormLabel>
              </div>
              <div className="flex flex-wrap gap-5">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-500">Username</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-80"
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
                    <FormItem>
                      <FormLabel className="text-gray-500">Email</FormLabel>
                      <FormControl>
                        <CustomInput
                          type="email"
                          label=""
                          className="w-80"
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
                    <FormItem>
                      <FormLabel className="text-gray-500">
                        Date Created
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="text"
                          label=""
                          className="w-80"
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
                    <FormItem>
                      <FormLabel className="text-gray-500">
                        Old Password
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="password"
                          label=""
                          className="w-80"
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
                    <FormItem>
                      <FormLabel className="text-gray-500">
                        New Password
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="password"
                          label=""
                          className="w-80"
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
                    <FormItem>
                      <FormLabel className="text-gray-500">
                        Confirm New Password
                      </FormLabel>
                      <FormControl>
                        <CustomInput
                          type="password"
                          label=""
                          className="w-80"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>
            </div>
            <div className="flex container mt-14">
              <Button type="submit" className="bg-blue-500">
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
