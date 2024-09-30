"use client";

import React, { useCallback, useEffect } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { useMediaQuery, useTheme } from "@mui/material";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { BookStatus } from "@/app/common/types/book.type";
import revalidateTag from "@/app/common/utils/revalidate-tag";

import { statusOptions, statusTextMap } from "../../constants/books-status";
import { BookMark } from "../bookmark/book-mark.component";

import * as S from "./status-stack.styles";

export const StatusStack = () => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status");
  const isFavoriteParam = searchParams.get("isFavorite");

  useEffect(() => {
    revalidateTag("books");
  }, [statusParam, isFavoriteParam]);

  const renderLink = useCallback(
    (status: string | null, label: string) => (
      <Link
        key={status || "all"}
        href={{
          pathname: "/",
          query: status ? { status } : undefined,
        }}
        passHref
        style={{ textDecoration: "none" }}
      >
        <S.ItemStyled isActive={statusParam === status && !isFavoriteParam}>
          {label}{" "}
          {status !== null && <BookMark status={status as BookStatus} />}
        </S.ItemStyled>
      </Link>
    ),
    [statusParam, isFavoriteParam]
  );

  return (
    <S.StackWrapper scrollable={onlySmallScreen}>
      {renderLink(null, "Todos")}
      {statusOptions.map((status) => renderLink(status, statusTextMap[status]))}
      <Link
        href={{
          pathname: "/",
          query: { isFavorite: true },
        }}
        passHref
        style={{ textDecoration: "none" }}
      >
        <S.ItemStyled isActive={Boolean(isFavoriteParam)}>
          Favoritos <FavoriteIcon sx={{ color: "red" }} />
        </S.ItemStyled>
      </Link>
    </S.StackWrapper>
  );
};
