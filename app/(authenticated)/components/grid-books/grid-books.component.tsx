"use client";
import React from "react";

import { Fade } from "@mui/material";

import CustomPagination from "@/app/common/components/custom-pagination/custom-pagination.component";
import { RenderList } from "@/app/common/components/list/list.component";

import BookCard from "../books-card/book-card.component";

import EmptyBooks from "./components/empty-books/empty-books.component";
import * as S from "./grid-books.styles";
import { gridBooksProps } from "./grid-books.types";

function GridBooks({ books, totalPages }: gridBooksProps) {
  if (books.length === 0) {
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

export default GridBooks;
