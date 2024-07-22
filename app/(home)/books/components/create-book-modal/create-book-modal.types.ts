import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { createBookFormData } from "../../schema/create-book.schema";


export type createBookModalProps = {
  open: boolean;
  handleClose: () => void;
}

export type useCreateBookModalReturn = {
  handleSubmit: UseFormHandleSubmit<createBookFormData, undefined>;
  onSubmit: (data: createBookFormData) => Promise<void>;
  register: UseFormRegister<createBookFormData>;
  errors: FieldErrors<createBookFormData>;
  isLoading: boolean;
};
