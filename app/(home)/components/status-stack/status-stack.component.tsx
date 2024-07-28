"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { statusOptions, statusTextMap } from "../../constants/books-status";
import Link from "next/link";
import * as S from "./status-stack.styles";
import { useMediaQuery, useTheme } from "@mui/material";

function StatusStack() {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <S.StackWrapper
      direction={onlySmallScreen ? "column" : "row"}
    >
      {statusOptions.map((status) => (
        <Link key={status} href={`/${status}`} passHref>
          <S.ItemStyled>{statusTextMap[status]}</S.ItemStyled>
        </Link>
      ))}
    </S.StackWrapper>
  );
}

export default StatusStack;
