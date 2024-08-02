import { Typography } from "@mui/material";
import React from "react";
import { Book as BookProps } from "../../types/book.type";
import * as S from "./book-card.styles";

function BookCard({ author, book }: BookProps) {
  return (
    <S.WrapperBookCard>
      <Typography noWrap>{book}</Typography>
      <Typography noWrap>{author}</Typography>
    </S.WrapperBookCard>
  );
}

export default BookCard;
