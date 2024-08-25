import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import {
  createBookFormData,
  createBookFormSchema,
} from "@/app/(authenticated)/schema/create-book.schema";
import createBook, {
  getBooksOnGoogleApi,
} from "@/app/(authenticated)/services/books/book.service";
import { BooksGoogleApi } from "@/app/common/types/books-google-api";

import { useCreateBookModalReturn } from "../create-book-modal.types";

export function useCreateModal({
  handleClose,
}: {
  handleClose: () => void;
}): useCreateBookModalReturn {
  const [isLoading, setIsLoading] = useState(false);

  const [booksSearch, setBooksSearch] = useState<BooksGoogleApi[]>([]);
  const [isLoadingBooksSearch, setIsLoadingBooksSearch] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
    setValue,
    setError,
  } = useForm<createBookFormData>({
    resolver: zodResolver(createBookFormSchema),
  });

  const handleSearchBookName = (bookName: string) => {
    setIsLoadingBooksSearch(true);
    getBooksOnGoogleApi(bookName)
      .then((data) => {
        setBooksSearch(data);
      })
      .finally(() => {
        setIsLoadingBooksSearch(false);
      });
  };

  const handleSetValues = (
    values: {
      title: string;
      authors: string;
      description: string;
      bookImage: string;
    } | null,
  ) => {
    setValue("author", values?.authors ?? "");
    setValue("description", values?.description ?? "");
    setValue("imageUrl", values?.bookImage ?? "");
  };

  async function onSubmit(data: createBookFormData) {
    setIsLoading(true);
    const res = await createBook(data).finally(() => setIsLoading(false));
    if (res.statusCode === 409) {
      setError("book", { type: "manual", message: res.message });
    }

    if (res.statusCode === 200) {
      reset();
      handleClose();
      router.push(`?status=${data.status}`, {
        scroll: false,
      });
    }
  }

  const handleCloseModal = useCallback(() => {
    handleClose();
    setBooksSearch([]);
    reset();
  }, [handleClose, reset]);

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit,
    control,
    handleSearchBookName,
    watch,
    booksSearch,
    isLoadingBooksSearch,
    handleSetValues,
    handleCloseModal,
  };
}
