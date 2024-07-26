import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { AuthFormLayoutProps } from "./auth-form-layout.types";
import * as S from "./auth-form-layout.styles";

function AuthFormLayout<T extends FieldValues>({
  handleSubmit,
  onSubmit,
  children,
}: AuthFormLayoutProps<T>) {
  return (
    <S.WrapperAuthFormLayout
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <S.WrapperStack spacing={3}>
        <S.WrapperBoxTitleAndChildrens>
          <S.TitleAuthForm
            variant="h4"
            fontSize={32}
          >
            Algernon
          </S.TitleAuthForm>
        </S.WrapperBoxTitleAndChildrens>
        {children}
      </S.WrapperStack>
    </S.WrapperAuthFormLayout>
  );
}

export default AuthFormLayout;
