import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

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

import { LoginFormData } from "@/models/auth.model";
import { ROUTES } from "@/routes/endpoints";
import { loginSchema } from "@/schema/authSchema";
import { loginService } from "@/services/auth/authService";

import { useAuthStore } from "@/hooks/state/useAuth";
import { useToast } from "@/hooks/use-toast";
import withAdminAuth from "@/hoc/withAdminAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingIcon from "@/components/reusable/LoadingIcon";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { login, isLoading, setLoading } = useAuthStore();
  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      // Make the API call using the login service
      const response = await loginService(data);
      if (response) {
        // If the response is valid, store it in localStorage, we need to stringify the response for it not to end up being [Object Object] in the session
        const { token, data } = response;

        if (data?.access_level === "admin") {
          login(true, true, token, data);
          navigate(ROUTES.ADMIN.BASE);
        } else {
          login(false, true, token, data);
          navigate(ROUTES.BASE);
        }

        // Display a toast
        toast({
          variant: "success",
          title: "Login successful!",
          description: "You will be redirected in a few seconds.",
        });

        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);

      toast({
        variant: "destructive",
        title: "Oops! We've encountered an obstacle",
        description: `Something went wrong: ${error}`,
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          className="justify-center items-center flex min-h-screen"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="justify-center items-center flex max-md:gap-4 gap-10 w-full max-w-[80rem] max-md:flex-col-reverse">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="max-w-80">
                <div className="mb-8">
                  <FormLabel className="text-3xl font-sans font-semibold">
                    Login
                  </FormLabel>
                  <FormDescription className="mt-3">
                    Login to access your account.
                  </FormDescription>
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
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
                  <Link
                    to={ROUTES.FORGOT_PASSWORD}
                    className="underline text-blue-500 hover:text-blue-500/80"
                  >
                    Forgot Password
                  </Link>
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 text-white bg-store-primary rounded-md hover:bg-store-primary/80"
                >
                  Login {isLoading && <LoadingIcon />}
                </Button>
                <p className="text-sm mt-2">
                  Don't have an account?{" "}
                  <span className="underline text-blue-500 hover:text-blue-500/80">
                    <Link to={ROUTES.REGISTER}>Signup</Link>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={loginImage}
                alt="Sample Image."
                className="max-w-80 max-md:w-40 max-h-80"
              />
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default withAdminAuth(LoginPage);
