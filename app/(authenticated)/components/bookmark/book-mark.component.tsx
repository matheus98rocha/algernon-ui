import { SxProps, Theme } from "@mui/material";
import React from "react";

import * as S from "./book-mark.styles";
import { BookStatus } from "../../../common/types/book.type";
export type BookMarkProps = {
  status: BookStatus;
  sx?: SxProps<Theme>;
};

function BookMark({ status, sx }: BookMarkProps) {
  return <S.BookmarkIconStyled status={status} sx={sx} />;
}

export default BookMark;
