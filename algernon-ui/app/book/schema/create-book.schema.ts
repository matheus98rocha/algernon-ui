import { z } from "zod";

export const createBookFormSchema = z.object({
  book: z.string().min(1, "You must provide a book name"),
  description: z.string().min(1, "You must provide a book description"),
  author: z.string().min(1, "Author name is required"),
});

export type createBookFormData = z.infer<typeof createBookFormSchema>;
