"use client";

import React from "react";
import { statusOptions, statusTextMap } from "../../constants/books-status";
import Link from "next/link";
import * as S from "./status-stack.styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSearchParams } from "next/navigation";
import revalidateTag from "@/app/common/utils/revalidate-tag";
import BookMark from "../bookmark/book-mark.component";
import { BookStatus } from "../../types/book.type";

const StatusStack: React.FC = () => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status");

  const renderLink = (status: string | null, label: string) => (
    <Link
      key={status || "all"}
      href={{
        pathname: "/",
        query: status ? { status } : undefined,
      }}
      passHref
      onClick={() => revalidateTag("books")}
      style={{ textDecoration: "none" }}
    >
      <S.ItemStyled isActive={statusParam === status}>
        {label} {status !== null && <BookMark status={status as BookStatus} />}
      </S.ItemStyled>
    </Link>
  );

  return (
    <S.StackWrapper scrollable={onlySmallScreen}>
      {renderLink(null, "Todos")}
      {statusOptions.map((status) => renderLink(status, statusTextMap[status]))}
    </S.StackWrapper>
  );
};

export default StatusStack;
