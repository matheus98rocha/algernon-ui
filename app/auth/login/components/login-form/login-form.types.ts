import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { loginUserFormData } from "./schema/user-login.schema";

export type useLoginFormReturn = {
  handleSubmit: UseFormHandleSubmit<loginUserFormData, undefined>,
  onSubmit: (data: loginUserFormData) => Promise<void>,
  register: UseFormRegister<loginUserFormData>,
  errors: FieldErrors<loginUserFormData>,
  isLoading: boolean
}