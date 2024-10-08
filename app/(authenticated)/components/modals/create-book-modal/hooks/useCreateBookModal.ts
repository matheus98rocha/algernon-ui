import { useCallback, useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import {
  createBookFormData,
  createBookFormSchema,
} from "@/app/(authenticated)/schema/create-book.schema";
import createBook from "@/app/(authenticated)/services/books/book.service";
import { prefetchQuery } from "@/app/(authenticated)/utils/prefetch-query";
import { useToast } from "@/app/contexts/toast.context";

import { createBookModalProps } from "../create-book-modal.types";

export function useCreateModal({
  handleClose,
  book,
  open,
}: createBookModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
    setError,
  } = useForm<createBookFormData>({
    resolver: zodResolver(createBookFormSchema),
  });

  useEffect(() => {
    if (open) {
      reset({
        book: book.title ?? "",
        author: book.authors ?? "",
        description: book.description ?? "",
        imageUrl: book.bookImage ?? "",
      });
    }
  }, [open, book, reset]);

  async function onSubmit(data: createBookFormData) {
    setIsLoading(true);
    const res = await createBook(data).finally(() => setIsLoading(false));

    if (res.statusCode === 409) {
      setError("root", { type: "manual", message: res.message });
      showToast(res.message, "error");
    }

    if (res.statusCode === 200) {
      reset();
      handleClose();
      prefetchQuery("books").finally(() => {
        router.push(`/`);

        showToast("Livro criado com sucesso!", "success");
      });
    }
  }

  const handleCloseModal = useCallback(() => {
    handleClose();
    reset();
  }, [handleClose, reset]);

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit,
    control,
    watch,
    handleCloseModal,
  };
}
