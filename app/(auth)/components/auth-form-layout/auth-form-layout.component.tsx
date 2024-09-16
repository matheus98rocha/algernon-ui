import React from "react";

import { FieldValues } from "react-hook-form";

import * as S from "./auth-form-layout.styles";
import { AuthFormLayoutProps } from "./auth-form-layout.types";

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
          <S.TitleAuthForm variant="h4" fontSize={32}>
            Algernon
          </S.TitleAuthForm>
        </S.WrapperBoxTitleAndChildrens>
        {children}
      </S.WrapperStack>
    </S.WrapperAuthFormLayout>
  );
}

export default AuthFormLayout;
