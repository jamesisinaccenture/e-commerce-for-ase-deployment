import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2, {
    message: "Test",
  }),
  password: z.string().min(6, {
    message: "Test",
  }),
});
