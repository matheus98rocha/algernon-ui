import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export type TextFormFieldProps<TFieldValues extends FieldValues> = {
  register: UseFormRegister<TFieldValues>;
  registerOption: Path<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  label: string;
};
