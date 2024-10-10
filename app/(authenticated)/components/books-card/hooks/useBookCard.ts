import { useCallback, useState } from "react";

import {
  deleteBook,
  patchBook,
} from "@/app/(authenticated)/services/books/book.service";
import { Book } from "@/app/common/types/book.type";
import { useToast } from "@/app/contexts/toast.context";
import { queryClient } from "@/app/global-provider";

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

  const handleRefresh = () => {
    queryClient
      .resetQueries({
        queryKey: ["books"],
      })
      .then((resp) => console.log(resp));
  };

  const handleFavoriteClick = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      const updatedFavorite = !isFavorite;
      setIsFavorite(updatedFavorite);
      await patchBook(
        {
          author,
          book,
          status,
          description,
          id,
          isFavorite: updatedFavorite,
          imageUrl,
          rate,
        },
        id,
      ).then((response) => {
        if (response.statusCode === 200) {
          handleRefresh();
        }
        return response;
      });
    },
    [author, book, status, description, id, isFavorite, imageUrl, rate],
  );

  const handleRateBookClick = useCallback(
    async (e: React.SyntheticEvent<Element, Event>, rating: number) => {
      e.stopPropagation();
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
        id,
      );
    },
    [author, book, status, description, id, isFavorite, imageUrl],
  );

  const handleDeleteBook = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      const res = await deleteBook(id);

      if (res.statusCode !== 200) {
        showToast("Ops! Algo deu errado", "error");
      } else {
        showToast("Livro deletado com sucesso!", "success");
      }
      setOpenDeleteBook(false);
    },
    [id, showToast],
  );

  const handleOpenMoreOptionsBookCard = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setOpenMoreOptions(!openMoreOptions);
    },
    [openMoreOptions],
  );

  return {
    openDeleteBook,
    openMoreOptions,
    isFavorite,
    handleFavoriteClick,
    handleDeleteBook,
    handleOpenMoreOptionsBookCard,
    setOpenMoreOptions,
    setOpenDeleteBook,
    rating,
    setRating,
    handleRateBookClick,
  };
}
