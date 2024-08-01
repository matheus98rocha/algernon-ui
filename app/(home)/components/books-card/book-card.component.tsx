import { Card, Typography } from "@mui/material";
import React from "react";
import { Book as BookProps } from "../../types/book.type";
import { statusTextMap } from "../../constants/books-status";

function BookCard({ author, book, description, status }: BookProps) {
  return (
    <Card
      sx={{
        padding: "4px",
      }}
    >
      <Typography variant="h4">{book}</Typography>
      <Typography variant="h4">{author}</Typography>
      {/* In development */}
      <Typography variant="h4">{description.slice(0, 10)}...</Typography>
      <Typography variant="h4">{statusTextMap[status]}</Typography>
    </Card>
  );
}

export default BookCard;
