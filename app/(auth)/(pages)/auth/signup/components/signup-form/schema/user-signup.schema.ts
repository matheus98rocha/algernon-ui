// src/schemas/createUserFormSchema.ts

import { z } from "zod";

import { validatePassword } from "../validations/strong-password.validation";

export const createUserFormSchema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    lastName: z.string().min(1, "Sobrenome é obrigatório"),
    email: z.string().min(1, "E-mail é obrigatório"),
    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .refine(
        (value) => {
          const {
            hasMinimumLength,
            hasMinimumLowercase,
            hasMinimumUppercase,
            hasMinimumNumbers,
            hasMinimumSymbols,
          } = validatePassword(value);
          return (
            hasMinimumLength &&
            hasMinimumLowercase &&
            hasMinimumUppercase &&
            hasMinimumNumbers &&
            hasMinimumSymbols
          );
        },
        { message: "A senha não é forte o suficiente" },
      ),
    confirmPassword: z
      .string()
      .min(8, "A confirmação da senha deve ter pelo menos 8 caracteres")
      .optional(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type createUserFormData = z.infer<typeof createUserFormSchema>;
