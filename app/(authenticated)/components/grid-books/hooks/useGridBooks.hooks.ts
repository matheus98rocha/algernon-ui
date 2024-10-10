import { useCallback, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { getAllBooks } from "@/app/(authenticated)/services/books/book.service";
import { createFallbackArray } from "@/app/(authenticated)/utils/create-fallback-array";
import { Book, Pagination } from "@/app/common/types/book.type";

import { GridBooksProps } from "../grid-books.component";

export function useGridBooks({ searchParams }: GridBooksProps) {
  const [isOpenAddBookModal, setIsOpenAddBookModal] = useState<boolean>(false);
  const { bookName, page, status, isFavorite, orderBy } = searchParams;

  const fallbackItems = createFallbackArray();

  const canOpenAddNewBookModal = (haveBookData: boolean): boolean =>
    haveBookData && bookName.length > 0;

  const {
    data: booksResponse,
    isFetched,
    isFetching,
  } = useQuery({
    queryFn: async () =>
      getAllBooks({
        ...searchParams,
      }).then((resp) => {
        if (canOpenAddNewBookModal(resp.data.length === 0)) {
          setIsOpenAddBookModal(true);
        }

        return resp;
      }),

    queryKey: ["books", bookName, page, status, isFavorite, orderBy],
    select: useCallback(
      (data: { data: Book[]; pagination: Pagination }) => data,
      []
    ),
  });

  const books = booksResponse?.data ?? [];
  const totalPages = booksResponse?.pagination.totalPages || 0;
  const hasBooks = books.length > 0;
  const showEmptyBooks = !hasBooks && isFetched;

  const showPagination = totalPages > 1;

  return {
    isOpenAddBookModal,
    isFetching,
    showEmptyBooks,
    showPagination,
    fallbackItems,
    books,
    totalPages,
    setIsOpenAddBookModal,
  };
}
