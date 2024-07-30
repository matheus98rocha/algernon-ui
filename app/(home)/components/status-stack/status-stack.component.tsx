"use client";
import * as React from "react";
import { statusOptions, statusTextMap } from "../../constants/books-status";
import Link from "next/link";
import * as S from "./status-stack.styles";
import { useMediaQuery, useTheme } from "@mui/material";

type StatusStackProps = {
  currentPage?:
    | "wantToRead"
    | "alreadyRead"
    | "reading"
    | "abandoned"
    | "rereading";
};

function StatusStack({ currentPage }: StatusStackProps) {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(currentPage);
  return (
    <>
      <S.StackWrapper scrollable={onlySmallScreen}>
        <Link href={`/`} passHref style={{ textDecoration: "none" }}>
          <S.ItemStyled isActive={undefined === currentPage}>
            Todos
          </S.ItemStyled>
        </Link>
        {statusOptions.map((status) => (
          <Link
            style={{ textDecoration: "none" }}
            key={status}
            href={{
              pathname: "/results",
              query: { status: status },
            }}
          >
            <S.ItemStyled isActive={status === currentPage}>
              {statusTextMap[status]}
            </S.ItemStyled>
          </Link>
        ))}
      </S.StackWrapper>
    </>
  );
}

export default StatusStack;
