import { z } from "zod";

export const loginUserFormSchema = z.object({
  email: z.string().min(1, "E-mail é obrigatório"),
  password: z.string().min(1, "Senha é obrigatória")
});

export type loginUserFormData = z.infer<typeof loginUserFormSchema>;
