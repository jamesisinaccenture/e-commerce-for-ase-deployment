import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { loginSchema } from "@/schema/authSchema";

import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const LoginPage = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form className="container p-12 ml-16 flex space-x-96 flex-wrap">
        <div className="mt-16">
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <CustomInput type="email" label="Email" {...field} />
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
                  <CustomInput type="password" label="Password" {...field} />
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
            Don't have an account? <span className="text-red-500">Signup</span>
          </p>
        </div>
        <div className="content-center">
          <img src="sample.jpg" alt="Sample Image." />
        </div>
      </form>
    </Form>
  );
};

export default LoginPage;
