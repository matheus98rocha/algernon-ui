import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import { createUserFormData } from "./schema/user-signup.schema";

export type useCreateUserFormReturn = {
  handleSubmit: UseFormHandleSubmit<createUserFormData, undefined>;
  onSubmit: (data: createUserFormData) => Promise<void>;
  register: UseFormRegister<createUserFormData>;
  errors: FieldErrors<createUserFormData>;
  watch: UseFormWatch<createUserFormData>;
  isLoading: boolean;
};
