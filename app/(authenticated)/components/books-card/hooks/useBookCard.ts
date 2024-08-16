import deleteBook from "@/app/(authenticated)/services/delete-book.service";
import patchBook from "@/app/(authenticated)/services/patch-book.service";
import { Book } from "@/app/common/types/book.type";
import { useCallback, useState } from "react";

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
  const [rating, setRating] = useState<number | null>(rate || 0);

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
        },
        id,
      );
    },
    [author, book, status, description, id, isFavorite, imageUrl],
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
      await deleteBook(id);
      setOpenDeleteBook(false);
    },
    [id],
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
