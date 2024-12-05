import { z } from "zod";

export const productFormSchema = z.object({
  product_id: z.string().optional(),
  product_name: z
    .string()
    .min(1, { message: "Product name is required" })
    .max(100, { message: "Product name cannot exceed 100 characters" })
    .optional(),
  product_img: z.any().optional(),
  product_description: z
    .string()
    .min(10, {
      message: "Product description must be at least 10 characters",
    })
    .max(500, {
      message: "Product description cannot exceed 500 characters",
    })
    .optional(),
  category: z.any().nullable().optional(),
  price: z
    .preprocess(
      (val) => (typeof val === "string" ? parseFloat(val) : val),
      z
        .number()
        .min(1, { message: "Price is required" })
        .refine((val) => !isNaN(val) && val > 0, {
          message: "Price must be a positive number",
        })
    )
    .optional(),
  currency: z
    .string()
    .length(3, { message: "Currency must be a 3-letter code" })
    .optional(),
  sold: z
    .number()
    .nonnegative({ message: "Sold quantity cannot be negative" })
    .optional(),
  date_created: z
    .string()
    .optional()
    .refine((date) => !date || !isNaN(Date.parse(date)), {
      message: "Date created must be a valid date string (ISO format)",
    }),
  created_by: z.string().optional(),
});

export const userFormSchema = z.object({
  user_id: z.string().optional(),
  first_name: z
    .string()
    .min(1, { message: "First name is required" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "First name must contain only letters and spaces",
    }),
  last_name: z
    .string()
    .min(1, { message: "Last name is required" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Last name must contain only letters and spaces",
    }),
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username must be alphanumeric and can include underscores",
    }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .regex(/\d.*\d.*\d/, {
        message: "Password must contain at least 3 numbers"})
    .regex(/[A-Z]/, {
        message: "Password must contain at least 1 capital letter",
    }),
  contact_number: z
    .string()
    .min(1, { message: "Contact number is required" })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Contact number must be in valid international format",
    }),
  address: z.string().min(1, { message: "Address is required" }),
  access_level: z.string().min(1, { message: "Access level is required" }),
  user_img: z.any(),
  position: z
    .string()
    // .min(1, { message: "Position number is required" })
    .nullable()
    .optional(),
  department: z
    .string()
    // .min(1, { message: "Deparment number is required" })
    .nullable()
    .optional(),
  branch: z
    .string()
    // .min(1, { message: "Branch number is required" })
    .nullable()
    .optional(),
  group_tag: z.string().optional(),
  status: z.string().optional(),
  date_created: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/, {
      message: "Date created must be in valid ISO 8601 format",
    })
    .optional(),
});

export const categoryFormSchema = z.object({
  category_id: z.string().optional(),
  category_name: z
    .string()
    .min(1, { message: "Category name is required" })
    .max(100, { message: "Category name cannot exceed 100 characters" }),
  // date_created: z
  //   .string()
  //   .optional()
  //   .refine((date) => !date || !isNaN(Date.parse(date)), {
  //     message: "Date created must be a valid date string (ISO format)",
  //   }),
  // created_by: z.string().optional(),
  // group_tag: z.string().optional(),
});
