"use client";
import { Fade } from "@mui/material";
import React from "react";

import CustomPagination from "@/app/common/components/custom-pagination/custom-pagination.component";

import EmptyBooks from "./components/empty-books/empty-books.component";
import * as S from "./grid-books.styles";
import { gridBooksProps } from "./grid-books.types";
import { Book } from "../../../common/types/book.type";
import BookCard from "../books-card/book-card.component";

function GridBooks({ books, totalPages }: gridBooksProps) {
  if (books.length === 0) {
    return <EmptyBooks />;
  }

  return (
    <Fade in>
      <S.WrapperGridBooks>
        <S.WrapperBooksList container>
          {books.map((book: Book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </S.WrapperBooksList>
        {totalPages > 1 && <CustomPagination count={totalPages} />}
      </S.WrapperGridBooks>
    </Fade>
  );
}

export default GridBooks;
