"use client";
import React from "react";

import { Fade } from "@mui/material";

import { CustomPagination, RenderList } from "@/app/common/components";

import { BookCard } from "../books-card/book-card.component";
import { EmptyBooks } from "../empty-books/empty-books.component";

import * as S from "./grid-books.styles";
import { gridBooksProps } from "./grid-books.types";

export function GridBooks({
  books,
  totalPages,
  isBookNotFound,
}: gridBooksProps) {
  if (books.length === 0 && !isBookNotFound) {
    return <EmptyBooks />;
  }

  return (
    <Fade in>
      <S.WrapperGridBooks>
        <S.WrapperBooksList container>
          <RenderList
            getKey={({ id }) => id}
            items={books}
            renderItem={(book) => <BookCard {...book} />}
          />
        </S.WrapperBooksList>
        {totalPages > 1 && <CustomPagination count={totalPages} />}
      </S.WrapperGridBooks>
    </Fade>
  );
}
