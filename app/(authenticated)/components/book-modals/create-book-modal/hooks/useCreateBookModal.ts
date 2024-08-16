import { useCallback, useState } from "react";
import { useCreateBookModalReturn } from "../create-book-modal.types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import createBook from "@/app/(authenticated)/services/create-book-modal.service";
import {
  createBookFormData,
  createBookFormSchema,
} from "@/app/(authenticated)/schema/create-book.schema";
import { useRouter } from "next/navigation";
import { getBooksOnGoogleApi } from "@/app/(authenticated)/services/get-books.service";
import { BooksGoogleApi } from "@/app/common/types/books-google-api";

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
    const formData = new FormData();
    formData.append("book", data.book);
    formData.append("description", data.description);
    formData.append("author", data.author);
    formData.append("status", data.status ?? "");
    formData.append("imageUrl", data.imageUrl ?? "");

    setIsLoading(true);
    const res = await createBook(formData).finally(() => setIsLoading(false));
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
