import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export type AuthFormLayoutProps<T extends FieldValues> = {
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: (data: T) => void;
  titleForm: string;
  children: React.ReactNode[];
};
