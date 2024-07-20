import { Card, Typography } from "@mui/material";
import React from "react";
import { Book as BookProps } from "../../types/book.type";

function BookCard({ author, book, description }: BookProps) {
  return (
    <Card
      sx={{
        padding: "4px",
      }}
    >
      <Typography variant="h4">{book}</Typography>
      <Typography variant="h4">{author}</Typography>
      <Typography variant="h4">{description}</Typography>
    </Card>
  );
}

export default BookCard;
