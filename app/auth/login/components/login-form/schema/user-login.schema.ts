import { z } from "zod"

export const loginUserFormSchema = z.object({
  email: z.string().min(1, "E-mail is required"),
  password: z.string().min(1, "Password is required")
})

export type loginUserFormData = z.infer<typeof loginUserFormSchema>