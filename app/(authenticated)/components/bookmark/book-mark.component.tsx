"use client";
import React from "react";

import { SxProps, Theme } from "@mui/material";

import { BookStatus } from "../../../common/types/book.type";

import * as S from "./book-mark.styles";
export type BookMarkProps = {
  status: BookStatus;
  sx?: SxProps<Theme>;
  onClick?: () => void;
};

export function BookMark({ status, sx, onClick }: BookMarkProps) {
  return <S.BookmarkIconStyled status={status} sx={sx} onClick={onClick} />;
}
