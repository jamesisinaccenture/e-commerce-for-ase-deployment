import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import loginImage from "@/assets/images/login-image.jpg";
import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
/* eslint-disable react-refresh/only-export-components */

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Loader from "@/components/reusable/Loader";
import { LoginFormData } from "@/models/auth.model";
import { ROUTES } from "@/routes/endpoints";
import { loginSchema } from "@/schema/authSchema";
import { loginService } from "@/services/authService";

import { useAuthStore } from "@/hooks/state/useAuth";
import { useToast } from "@/hooks/use-toast";
import withAdminAuth from "@/hoc/withAdminAuth";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { login, isLoading, setLoading } = useAuthStore();
  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      // Make the API call using the login service
      const response = await loginService(data);
      if (response) {
        // If the response is valid, store it in sessionStorage, we need to stringify the response for it not to end up being [Object Object] in the session
        const { token } = response;
        sessionStorage.setItem("session", JSON.stringify(response));

        login(true, true, token, { user: response });

        // Display a toast
        toast({
          variant: "success",
          title: "Login successful!",
          description: "You will be redirected in a few seconds.",
        });

        navigate(ROUTES.ADMIN.BASE);

        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Oops! We've encountered an obstacle",
        description: `Something went wrong: ${error}`,
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Form {...form}>
          <form
            className="justify-center p-12 flex space-x-60 lg:space-x-60 md:space-x-0 sm:space-x-0 min-h-screen w-full"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="mt-16 w-full lg:w-auto">
              <div className="mb-8">
                <FormLabel className="text-3xl font-sans font-semibold">
                  Login
                </FormLabel>
                <FormDescription className="mt-3">
                  Login to access your account.
                </FormDescription>
              </div>
              <div className="mb-3 w-80">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <CustomInput type="text" label="Username" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-3 w-80">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <CustomInput
                        type="password"
                        label="Password"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center space-x-24 mb-8 text-sm">
                <div>
                  <Checkbox id="rem" />
                  <label htmlFor="rem" className="ml-1">
                    Remember me
                  </label>
                </div>
                <p className="text-red-500">Forgot Password</p>
              </div>
              <Button type="submit" className="w-80 bg-blue-600">
                Login
              </Button>
              <p className="text-sm mt-2">
                Don't have an account?{" "}
                <span className="text-red-500">Signup</span>
              </p>
            </div>
            <div className="hidden md:block mt-6 max-w-80 max-h-96 min-h-96 min-w-80">
              <img src={loginImage} alt="Sample Image." />
            </div>
          </form>
        </Form>
      )}
    </>
  );
};

export default withAdminAuth(LoginPage);
