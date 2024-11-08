import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(4, {
    message: "Enter a valid username.",
  }),
  password: z.string().min(8, {
    message: "Enter a valid password.",
  }),
});

export const verifyPasswordSchema = z.object({
  verificationCode: z
    .string()
    .length(6, "Verification code must be exactly 6 characters"),
});

export const resetPasswordSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Valid email is needed"),

    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirmation must be at least 8 characters"),
    verificationCode: z.string().min(4, "Validation Code must be 4 numbers"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

// export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
