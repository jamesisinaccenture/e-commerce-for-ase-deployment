import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(4, {
    message: "Enter a valid username.",
  }),
  password: z.string().min(8, {
    message: "Enter a valid password.",
  }),
});
