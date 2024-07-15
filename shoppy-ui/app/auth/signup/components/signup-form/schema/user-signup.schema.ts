import { z } from "zod"

export const createUserFormSchema = z.object({
  email: z.string().min(1, "E-mail is required"),
  password: z.string().min(8, "Password needs a lest 8 characters").refine(value => {
    return (
      /[a-z]/.test(value) &&
      /[A-Z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(value)
    );
  }, { message: "Password is not strong enough" }),
  confirmPassword: z.string().min(8, "Confirm Password needs a lest 8 characters").optional()
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: "Password doesn't match",
  path: ["confirmPassword"]
})

export type createUserFormData = z.infer<typeof createUserFormSchema>