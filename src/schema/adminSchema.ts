import { z } from "zod";

export const productFormSchema = z.object({
  product_id: z.string().optional(),
  product_name: z
    .string()
    .min(1, { message: "Product name is required" })
    .max(100, { message: "Product name cannot exceed 100 characters" }),
  product_img: z.any(),
  product_description: z
    .string()
    .min(10, { message: "Product description must be at least 10 characters" })
    .max(500, { message: "Product description cannot exceed 500 characters" }),
  category: z.string().nonempty({ message: "Category is required" }),
  price: z
    .string()
    .min(1, { message: "Price is required" })
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Price must be a positive number",
    }),
  currency: z
    .string()
    .length(3, { message: "Currency must be a 3-letter code" }),
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
