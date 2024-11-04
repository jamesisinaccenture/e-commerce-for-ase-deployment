import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

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
      <form className="rounded border">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <CustomInput type="email" label="Email Address" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginPage;
