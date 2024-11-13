import { useForm } from "react-hook-form";

import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SignupFormData } from "@/models/auth.model";
import { signupSchema } from "@/schema/authSchema";

import { signupService } from "../../services/authService";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupPage = () => {
  const { toast } = useToast();
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      username: "",
      password: "",
      confirmPassword: "",
      terms: false,
      dateCreated: new Date().toISOString(),
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    console.log("Form submitted with data:", data);
    try {
      const response = await signupService(data);

      // Store response data in sessionStorage
      if (response.token) {
        sessionStorage.setItem("userToken", response.token);
      }
      if (response.userId) {
        sessionStorage.setItem("userId", response.userId);
      }

      toast({
        variant: "success",
        title: "Registered successfully!",
        description: "Your account has been created.",
      });

      console.log("User created:", response);
    } catch (error) {
      console.error("Signup failed:", error);

      toast({
        variant: "destructive",
        title: "Signup failed",
        description: `Something went wrong: ${error}`,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Create Account
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput label="First Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput label="Last Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      label="Contact Number"
                      type="text"
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
                  <FormControl>
                    <CustomInput label="Address" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomInput label="Username" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomInput label="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomInput
                    label="Confirm Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <input
            type="hidden"
            value={new Date().toISOString()}
            {...form.register("dateCreated")}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <span className="text-gray-600">
                  I agree to all the{" "}
                  <span className="underline text-black">Terms</span> and{" "}
                  <span className="underline text-black">Privacy Policies</span>
                </span>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Create account
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupPage;
