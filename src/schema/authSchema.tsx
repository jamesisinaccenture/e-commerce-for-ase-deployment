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

export const signupSchema = z
  .object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    // Keep the email validation schema commented for future use
    // email: z
    //   .string()
    //   .nonempty("Email is required")
    //   .email("Enter a valid email address"),
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
    confirmPassword: z.string().nonempty("Please confirm your password"),
    terms: z.boolean().default(false),
    dateCreated: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const updateInformationSchema = z.object({
  user_id: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  address: z.string().optional(),
  contact_number: z
    .string()
    .regex(/^\d{11}$/, "Contact number must be exactly 11 digits")
    .optional(),
  username: z.string().optional(),
  // email: z.string().optional(),
  // date: z.string().optional(),
  // old_password: z.string().nonempty("Please enter your old password"),
  // new_password: z
  //   .string()
  //   .min(10, "Password must be at least 10 characters long")
  //   .regex(/\d.*\d.*\d/, "Password must contain at least 3 numbers")
  //   .regex(/[A-Z]/, "Password must contain at least 1 capital letter"),
  // confirm_new_password: z.string().nonempty("Please confirm your password"),
});
// .refine((data) => data.new_password === data.confirm_new_password, {
//   message: "Password do not match",
//   path: ["confirm_new_password"],
// });
