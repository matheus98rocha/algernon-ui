"use client";
import React, { useCallback, useState } from "react";
import { Fade, Skeleton } from "@mui/material";

import { CustomPagination, RenderList } from "@/app/common/components";
import { BookCard } from "../books-card/book-card.component";
import { EmptyBooks } from "../empty-books/empty-books.component";

import * as S from "./grid-books.styles";
import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../../services/books/book.service";
import { BookByStatusProps } from "../../page";
import FilterBooksContainer from "../filter-books-container/filter-books-container.component";

import { createFallbackArray } from "../../utils/create-fallback-array";
import { Book, Pagination } from "@/app/common/types/book.type";
import { AddNewBookModal } from "../modals/add-new-book-modal/add-new-book-modal.component";

type GridBooksProps = {
  searchParams: BookByStatusProps["searchParams"];
};

export function GridBooks({ searchParams }: GridBooksProps) {
  const [isOpenAddBookModal, setIsOpenAddBookModal] = useState<boolean>(false);
  const { bookName, page, status, isFavorite, orderBy } = searchParams;
  const {
    data: booksResponse,
    isFetched,
    isFetching,
  } = useQuery({
    queryFn: async () =>
      getAllBooks({
        ...searchParams,
      }).then((data) => {
        if (data.data.length === 0 && bookName.length > 0) {
          setIsOpenAddBookModal(true);
        }

        return data;
      }),

    queryKey: ["books", bookName, page, status, isFavorite, orderBy],
    // select: (data) => data,
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

  const fallbackItems = createFallbackArray();

  if (showEmptyBooks) {
    return (
      <>
        <AddNewBookModal
          bookName={searchParams.bookName}
          handleCloseModal={() => setIsOpenAddBookModal(false)}
          open={isOpenAddBookModal}
        />
        <FilterBooksContainer bookName={searchParams.bookName} />
        <EmptyBooks />;
      </>
    );
  }

  if (isFetching) {
    return (
      <S.WrapperBooksList container>
        <RenderList
          getKey={(item) => item.id}
          items={fallbackItems}
          renderItem={() => (
            <Skeleton variant="rectangular" width={300} height={450} />
          )}
        />
      </S.WrapperBooksList>
    );
  }

  return (
    <>
      <FilterBooksContainer bookName={searchParams.bookName} />
      <Fade in>
        <S.WrapperGridBooks>
          <S.WrapperBooksList container>
            <RenderList
              getKey={({ id }) => id}
              items={books}
              renderItem={(book) => <BookCard {...book} />}
            />
          </S.WrapperBooksList>
          {showPagination && <CustomPagination count={totalPages} />}
        </S.WrapperGridBooks>
      </Fade>
    </>
  );
}
