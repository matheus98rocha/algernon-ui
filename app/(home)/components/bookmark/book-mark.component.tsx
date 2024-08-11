import React from "react";
import { BookStatus } from "../../../common/types/book.type";
import * as S from "./book-mark.styles";
import { SxProps, Theme } from "@mui/material";
export type BookMarkProps = {
  status: BookStatus;
  sx?: SxProps<Theme>;
};

function BookMark({ status, sx }: BookMarkProps) {
  return <S.BookmarkIconStyled status={status} sx={sx} />;
}

export default BookMark;
