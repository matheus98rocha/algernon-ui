import { z } from "zod";

const statusOptions = ['wantToRead', 'alreadyRead', 'reading'] as const;

export const createBookFormSchema = z.object({
  book: z.string().min(1, "Você deve fornecer o nome do livro"),
  description: z.string().min(1, "Você deve fornecer a descrição do livro"),
  author: z.string().min(1, "O nome do autor é obrigatório"),
  status: z.enum(statusOptions, {
    errorMap: () => ({ message: "O status deve ser um dos seguintes: Quero Ler, Já Li, Estou Lendo" }),
  }),
});

export type createBookFormData = z.infer<typeof createBookFormSchema>;
