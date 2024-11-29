import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "application/pdf",
  "application/msword", // For .doc files
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // For .docx files
];

export const formDataSchema = z.object({
  name: z.string().trim().min(1, "This field is required"),
  email: z
    .string()
    .min(1, "This field is required")
    .email("Please enter a valid email address"),
  gender: z.enum(["male", "female"], {
    required_error: "This field is required.",
  }),
  birth: z.date({
    required_error: "A date of birth is required.",
  }),
  phone: z.string().min(1, "This field is required"),
  address: z.string().trim().min(8, "This field is required"),
  country: z.string().trim().min(1, "This field is required"),
  media: z
    .instanceof(File, { message: "File is required" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      // Max size: 5MB
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PNG, JPEG, PDF, DOC, or DOCX files are allowed",
    }),
});
