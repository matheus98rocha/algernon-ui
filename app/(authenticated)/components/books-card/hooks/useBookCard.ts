import { useCallback, useState } from "react";

import { useMutation } from "@tanstack/react-query";

import {
  deleteBook,
  patchBook,
} from "@/app/(authenticated)/services/books/book.service";
import { Book } from "@/app/common/types/book.type";
import { useToast } from "@/app/contexts/toast.context";
import { useRefetchQuerie } from "@/app/hooks/useRefetchQuerie.hook";

export function useBookCard({
  author,
  book,
  status,
  isFavorite: initialFavorite,
  description,
  id,
  imageUrl,
  rate,
}: Book) {
  const [isFavorite, setIsFavorite] = useState<boolean>(initialFavorite);
  const [openMoreOptions, setOpenMoreOptions] = useState<boolean>(false);
  const [openDeleteBook, setOpenDeleteBook] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(rate);
  const { showToast } = useToast();

  const { handleResetQuerie } = useRefetchQuerie();

  const { mutateAsync: handleAddFavorite } = useMutation({
    mutationFn: async (event: React.MouseEvent) => {
      event.stopPropagation();

      const updatedFavorite = !isFavorite;
      setIsFavorite(updatedFavorite);

      const bookData = {
        author,
        book,
        status,
        description,
        id,
        isFavorite: updatedFavorite,
        imageUrl,
        rate,
      };

      return await patchBook(bookData, id);
    },
    onSuccess: () => {
      handleResetQuerie("books");
    },
    onError: () => {
      showToast("Ops! Algo deu errado", "error");
    },
  });

  const { mutateAsync: handleRateBook } = useMutation({
    mutationFn: async ({
      event,
      rating,
    }: {
      event: React.SyntheticEvent<Element, Event>;
      rating: number;
    }) => {
      event.stopPropagation();
      if (!rating) {
        return;
      }

      await patchBook(
        {
          author,
          book,
          status,
          description,
          id,
          isFavorite,
          imageUrl,
          rate: rating,
        },
        id
      );
    },
    onError: () => {
      showToast("Ops! Algo deu errado", "error");
    },
  });

  const { mutateAsync: handleDeleteBook } = useMutation({
    mutationFn: async (event: React.MouseEvent) => {
      event.stopPropagation();

      await deleteBook(id);
    },
    onSuccess: () => {
      handleResetQuerie("books");
      showToast("Livro deletado com sucesso!", "success");
    },
    onError: () => {
      showToast("Ops! Algo deu errado", "error");
    },
    onSettled: () => {
      setOpenDeleteBook(false);
    },
  });

  const handleOpenMoreOptionsBookCard = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setOpenMoreOptions(!openMoreOptions);
    },
    [openMoreOptions]
  );

  return {
    openDeleteBook,
    openMoreOptions,
    isFavorite,
    handleAddFavorite,
    handleDeleteBook,
    handleOpenMoreOptionsBookCard,
    setOpenMoreOptions,
    setOpenDeleteBook,
    rating,
    setRating,
    handleRateBook,
  };
}
