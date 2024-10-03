"use client";
import React, { useCallback } from "react";

import { useRouter } from "next/navigation";

import * as S from "./back-button.styles";
import { BackButtonProps } from "./back-button.types";

export function BackButton({ path = "/", isBack = false }: BackButtonProps) {
  const router = useRouter();

  const handleRoutePush = useCallback(
    (isBack: boolean) => {
      isBack ? router.back() : router.push(path);
    },
    [path, router],
  );

  return (
    <S.WrapperBackButton onClick={() => handleRoutePush(isBack)}>
      <S.StyledArrowBackIcon />
      <S.BackButtonTypography variant="h6">Voltar</S.BackButtonTypography>
    </S.WrapperBackButton>
  );
}
