'use client'
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { gridBooksProps } from "./grid-books.types";
import BookCard from "../books-card/book-card.component";
import { Book } from "../../types/book.type";
import EmptyBooks from "./empty-books/empty-books.component";
import { Box, Fade } from "@mui/material";
import CustomPagination from "@/app/components/custom-pagination/custom-pagination.component";

function GridBooks({ books, totalPages }: gridBooksProps) {
  if (books.length === 0) {
    return <EmptyBooks />;
  }

  return (
    <Fade in>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: "column",
        }}
      >
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
        {totalPages > 1 && <CustomPagination count={totalPages} />}
      </Box>
    </Fade>
  );
}

export default GridBooks;
