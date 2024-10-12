import React, { useCallback, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
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
    defaultValues: {
      book: book.title,
      author: book.authors,
      description: book.description,
      imageUrl: book.bookImage,
    },
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

  const { mutateAsync: onSubmitMutation, isPending: isLoading } = useMutation({
    mutationFn: async (data: createBookFormData) => createBook(data),
    onSuccess: (response) => {
      console.log(response);
      if (response.statusCode === 409) {
        setError("root", { type: "manual", message: response.message });
        showToast(response.message, "error");
      } else {
        reset();
        handleClose();
        prefetchQuery("books").finally(() => {
          showToast("Livro criado com sucesso!", "success");
        });
      }
    },
    onError: (response) => {
      setError("root", { type: "manual", message: response.message });
      showToast(response.message, "error");
    },
  });

  const onSubmit = async (data: createBookFormData) => {
    try {
      await onSubmitMutation(data);
    } catch (error) {
      return error;
    }
  };

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
