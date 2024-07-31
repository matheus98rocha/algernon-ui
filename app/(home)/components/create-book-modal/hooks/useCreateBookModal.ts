import { useState } from "react";
import { useCreateBookModalReturn } from "../create-book-modal.types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import createBook from "@/app/(home)/services/create-book-modal.service";
import {
  createBookFormData,
  createBookFormSchema,
} from "@/app/(home)/schema/create-book.schema";
import { useRouter } from "next/navigation";

export function useCreateModal({
  handleClose,
}: {
  handleClose: () => void;
}): useCreateBookModalReturn {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<createBookFormData>({
    resolver: zodResolver(createBookFormSchema),
  });

  async function onSubmit(data: createBookFormData) {
    const formData = new FormData();
    formData.append("book", data.book);
    formData.append("description", data.description);
    formData.append("author", data.author);
    formData.append("status", data.status ?? "");
    // TODO: Precisa tratar os erros
    setIsLoading(true);
    const res = await createBook(formData).finally(() => setIsLoading(false));
    if (res.statusCode === 200) {
      reset();
      handleClose();
      router.push(`?status=${data.status}`, {
        scroll: false,
      });
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit,
    control,
  };
}
