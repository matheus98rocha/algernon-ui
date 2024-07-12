import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";
import { createUserFormData } from "./schema/user-signup.schema";

const TYPE_AUTH_FORM = {
  SIGNUP: "signup",
  LOGIN: "login"
} as const

type ObjectValues<T> = T[keyof T];

type TypeAuthForm = ObjectValues<typeof TYPE_AUTH_FORM>

type AuthFormPops = {
  type: TypeAuthForm
}

export type useAuthFormReturn = {
  isSignup: boolean,
  handleSubmit: UseFormHandleSubmit<createUserFormData, undefined>,
  onSubmit: (data: createUserFormData) => Promise<void>,
  register: UseFormRegister<createUserFormData>,
  errors: FieldErrors<createUserFormData>,
  watch: UseFormWatch<createUserFormData>
  isLoadingSignup: boolean
}

export type AuthFormProps = {
  type: 'signup' | 'login';
};
