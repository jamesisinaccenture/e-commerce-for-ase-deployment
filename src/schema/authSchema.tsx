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
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirmation must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

  export const signupSchema = z
  .object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Enter a valid email address"),
    phoneNumber: z
      .string()
      .regex(/^\d{11}$/, "Contact number must be exactly 11 digits"),
    address: z.string().nonempty("Address is required"),
    username: z.string().nonempty("Username is required"),
    password: z
      .string()
      .min(10, "Password must be at least 10 characters long")
      .regex(/\d.*\d.*\d/, "Password must contain at least 3 numbers")
      .regex(/[A-Z]/, "Password must contain at least 1 capital letter"),
    confirmPassword: z
      .string()
      .nonempty("Please confirm your password"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms" }),
    }),
    dateCreated: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
