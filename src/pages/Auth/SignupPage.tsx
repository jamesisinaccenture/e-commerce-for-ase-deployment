import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SignupFormData } from "@/models/auth.model";
import { ROUTES } from "@/routes/endpoints";
import { signupSchema } from "@/schema/authSchema";

import { signupService } from "../../services/authService";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate(); // Initialize the navigate function
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

      // Store response data in localStorage
      if (response.token) {
        localStorage.setItem("userToken", response.token);
      }
      if (response.userId) {
        localStorage.setItem("userId", response.userId);
      }
 
      toast({
        variant: "success",
        title: "Registered successfully!",
        description: "Your account has been created.",
      });
 
      console.log("User created:", response);
 
      navigate("/login");
 
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
                    <CustomInput label="Contact Number" type="text" {...field} />
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
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"                
                    checked={field.value}
                    onChange={field.onChange}
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
 
          {/* Link to Login Page */}
          <div className="mt-4 text-center">
            <span className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate(ROUTES.LOGIN)}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
};
 
export default SignupPage;