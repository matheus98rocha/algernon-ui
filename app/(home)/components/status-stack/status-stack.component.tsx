"use client";
import * as React from "react";
import { statusOptions, statusTextMap } from "../../constants/books-status";
import Link from "next/link";
import * as S from "./status-stack.styles";
import { useMediaQuery, useTheme } from "@mui/material";

function StatusStack() {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <S.StackWrapper scrollable={onlySmallScreen}>
      {statusOptions.map((status) => (
        <Link key={status} href={`/${status}`} passHref>
          <S.ItemStyled>{statusTextMap[status]}</S.ItemStyled>
        </Link>
      ))}
    </S.StackWrapper>
  );
}

export default StatusStack;
