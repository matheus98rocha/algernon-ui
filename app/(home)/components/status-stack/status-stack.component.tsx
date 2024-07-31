"use client";
import * as React from "react";
import { statusOptions, statusTextMap } from "../../constants/books-status";
import Link from "next/link";
import * as S from "./status-stack.styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSearchParams } from "next/navigation";

function StatusStack() {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const searchParams = useSearchParams();

  const statusParam = searchParams.get("status");
  return (
    <>
      <S.StackWrapper scrollable={onlySmallScreen}>
        <Link href={`/`} passHref style={{ textDecoration: "none" }}>
          <S.ItemStyled isActive={statusParam === null}>Todos</S.ItemStyled>
        </Link>
        {statusOptions.map((status) => (
          <Link
            style={{ textDecoration: "none" }}
            key={status}
            href={{
              pathname: "/",
              query: { status: status },
            }}
          >
            <S.ItemStyled isActive={statusParam === status}>
              {statusTextMap[status]}
            </S.ItemStyled>
          </Link>
        ))}
      </S.StackWrapper>
    </>
  );
}

export default StatusStack;
