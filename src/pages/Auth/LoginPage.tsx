import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Test",
  }),
  password: z.string().min(6, {
    message: "Test",
  }),
}); //Not the final validation for the login page

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form className="container p-12 mt-16">
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
        <div>
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
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginPage;
