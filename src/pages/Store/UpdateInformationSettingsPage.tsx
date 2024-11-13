import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
import { getToken, getUserSession } from "@/lib/utils";
import { UpdateInformationFormData } from "@/models/auth.model";
import { ROUTES } from "@/routes/endpoints";
import { updateInformationSchema } from "@/schema/authSchema";

import { zodResolver } from "@hookform/resolvers/zod";

const UpdateInformationSettingsPage = () => {
  const [settingsData, setSettingsData] = useState<UpdateInformationFormData>();
  const form = useForm<UpdateInformationFormData>({
    resolver: zodResolver(updateInformationSchema),
    defaultValues: {
      first_name: settingsData?.first_name ? settingsData?.first_name : "",
      last_name: "",
      address: "",
      contact_number: "",
      user_name: "",
      email: "",
      date: "",
      // old_password: "",
      // new_password: "",
      // confirm_new_password: "",
    },
  });

  const onSubmit = async (data: UpdateInformationFormData) => {
    console.log("Form updated with data:", data);
  };

  useEffect(() => {
    const data = getUserSession();
    console.log("Use Effect", data);
    setSettingsData(data);
    console.log(getToken());
  }, []);

  useEffect(() => {
    console.log(settingsData);
  }, [settingsData]);
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
                  name="user_name"
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
                <FormField
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
                />
                <FormField
                  control={form.control}
                  name="date"
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
                />
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
                <Link to={ROUTES.STORE.PROFILE}>Save Changes</Link>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UpdateInformationSettingsPage;
