import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { BooksGoogleApiPersistence } from "@/app/(authenticated)/services/books/book.types";

import { createBookFormData } from "../../../schema/create-book.schema";

export type createBookModalProps = {
  open: boolean;
  handleClose: () => void;
  book: BooksGoogleApiPersistence;
};

export type useCreateBookModalReturn = {
  handleSubmit: UseFormHandleSubmit<createBookFormData, undefined>;
  onSubmit: (data: createBookFormData) => Promise<void>;
  register: UseFormRegister<createBookFormData>;
  errors: FieldErrors<createBookFormData>;
  isLoading: boolean;
  control: Control<createBookFormData>;
  handleSearchBookName: (value: string) => void;
  watch: (name: keyof createBookFormData) => string;
  booksSearch: any[];
  isLoadingBooksSearch: boolean;
  handleSetValues: (book: BooksGoogleApiPersistence | null) => void;
  handleCloseModal: () => void;
};
