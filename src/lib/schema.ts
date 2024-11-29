import { z } from "zod";

export const formDataSchema = z.object({
  name: z.string().trim().min(1, "This field is required"),
  // email: z
  //   .string()
  //   .min(1, "This field is required")
  //   .email("Please enter a valid email address"),
  // phone: z.string().min(1, "This field is required"),
  // address: z.string().trim().min(8, "This field is required"),
});
