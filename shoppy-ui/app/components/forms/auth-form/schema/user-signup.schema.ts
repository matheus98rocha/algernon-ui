import { z } from "zod"

export const createUserFormSchema = z.object({
  email: z.string(),
  password: z.string().refine(value => {
    return (
      /[a-z]/.test(value) &&
      /[A-Z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(value)
    );
  }, { message: "Password is not strong enough" }),
  confirmPassword: z.string().optional()
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: "Password doesn't match",
  path: ["confirmPassword"]
})

export type createUserFormData = z.infer<typeof createUserFormSchema>