import { Card, Typography } from "@mui/material";
import React from "react";
import { Book as BookProps } from "../../types/book.type";

function BookCard({ author, book, description, status }: BookProps) {
  return (
    <Card
      sx={{
        padding: "4px",
      }}
    >
      <Typography variant="h4">{book}</Typography>
      <Typography variant="h4">{author}</Typography>
      <Typography variant="h4">{description}</Typography>
      <Typography variant="h4">
        {status == "wantToRead"
          ? "Quero Ler"
          : status == "alreadyRead"
          ? "Já Li"
          : "Estou Lendo"}
      </Typography>
    </Card>
  );
}

export default BookCard;
