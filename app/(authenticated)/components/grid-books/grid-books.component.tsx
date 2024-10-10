"use client";
import React from "react";

import { Fade, Skeleton } from "@mui/material";

import { CustomPagination, RenderList } from "@/app/common/components";

import { BookByStatusProps } from "../../page";
import { BookCard } from "../books-card/book-card.component";
import { EmptyBooks } from "../empty-books/empty-books.component";
import FilterBooksContainer from "../filter-books-container/filter-books-container.component";
import { AddNewBookModal } from "../modals/add-new-book-modal/add-new-book-modal.component";

import * as S from "./grid-books.styles";
import { useGridBooks } from "./hooks/useGridBooks.hooks";

export type GridBooksProps = {
  searchParams: BookByStatusProps["searchParams"];
};

export function GridBooks({ searchParams }: GridBooksProps) {
  const {
    fallbackItems,
    isFetching,
    isOpenAddBookModal,
    showEmptyBooks,
    showPagination,
    books,
    totalPages,
    setIsOpenAddBookModal,
  } = useGridBooks({
    searchParams,
  });

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
