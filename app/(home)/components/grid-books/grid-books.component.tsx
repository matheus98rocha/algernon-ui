"use client";
import React from "react";
import { gridBooksProps } from "./grid-books.types";
import BookCard from "./components/books-card/book-card.component";

import EmptyBooks from "./components/empty-books/empty-books.component";
import { Fade } from "@mui/material";
import CustomPagination from "@/app/components/custom-pagination/custom-pagination.component";
import { Book } from "../../types/book.type";
import * as S from "./grid-books.styles";

function GridBooks({ books, totalPages }: gridBooksProps) {
  if (books.length === 0) {
    return <EmptyBooks />;
  }

  return (
    <Fade in>
      <S.WrapperGridBooks>
        <S.WrapperBooksList container centered={books.length <= 2}>
          {books.map((book: Book) => (
            <BookCard
              key={book.id}
              description={book.description}
              book={book.book}
              author={book.author}
              id={book.id}
              status={book.status}
              isFavorite={book.isFavorite}
              imageUrl={book.imageUrl}
            />
          ))}
        </S.WrapperBooksList>
        {totalPages > 1 && <CustomPagination count={totalPages} />}
      </S.WrapperGridBooks>
    </Fade>
  );
}

export default GridBooks;
