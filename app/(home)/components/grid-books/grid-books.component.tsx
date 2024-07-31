import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { gridBooksProps } from "./grid-books.types";
import BookCard from "../books-card/book-card.component";
import { Book } from "../../types/book.type";
import EmptyBooks from "./empty-books/empty-books.component";
import { Fade } from "@mui/material";

function GridBooks({ books }: gridBooksProps) {
  if (books.length === 0) {
    return <EmptyBooks />;
  }

  return (
    <Fade in>
      <Grid container spacing={3} mt={2}>
        {books.map((book: Book) => (
          <Grid key={book.id} sm={6} lg={4} xs={12}>
            <BookCard
              description={book.description}
              book={book.book}
              author={book.author}
              id={book.id}
              status={book.status}
            />
          </Grid>
        ))}
      </Grid>
    </Fade>
  );
}

export default GridBooks;
