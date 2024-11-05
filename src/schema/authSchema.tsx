import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(4, {
    message: "Enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must have a minimum of 8 characters.",
  }),
});
