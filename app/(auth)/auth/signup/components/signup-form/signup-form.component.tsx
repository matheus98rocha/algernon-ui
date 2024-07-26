"use client";
import {
  CircularProgress,
  Link,
  TextField,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { ValidatePassword } from "./components/ValidatePassword.component";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCreateUserForm } from "./hooks/useCreateUser";
import AuthFormLayout from "@/app/(auth)/auth/components/auth-form-layout/auth-form-layout.component";
import TextFieldPassword from "@/app/components/inputs/text-field-password/text-field-password";
import * as S from "./signup-form.styles";

function SignupForm() {
  const { errors, handleSubmit, onSubmit, register, watch, isLoading } =
    useCreateUserForm();

  const password = watch("password");
  const canShowPasswordValidation = password?.length > 0;

  return (
    <AuthFormLayout
      titleForm={"Cadastre-se gratuitamente"}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    >
      <TextField
        {...register("name")}
        label="Nome"
        variant="outlined"
        type="text"
        helperText={errors.name?.message}
        error={!!errors.name}
      />

      <TextField
        {...register("lastName")}
        label="Sobrenome"
        variant="outlined"
        type="text"
        helperText={errors.lastName?.message}
        error={!!errors.lastName}
      />
      <TextField
        {...register("email")}
        label="E-mail"
        variant="outlined"
        type="email"
        helperText={errors.email?.message}
        error={!!errors.email}
      />
      <TextFieldPassword
        register={register}
        registerOption="password"
        label="Senha"
        errors={errors}
      />
      {canShowPasswordValidation && <ValidatePassword password={password} />}
      <TextFieldPassword
        register={register}
        registerOption="confirmPassword"
        label="Confirmar Senha"
        errors={errors}
      />
      <LoadingButton
        type={"submit"}
        variant="contained"
        loading={isLoading}
        loadingPosition="center"
        loadingIndicator={<CircularProgress color="info" size={16} />}
      >
        {"Cadastrar"}
      </LoadingButton>
      <S.WrapperRootMessage>
      <S.TypographyErrorMessageRoot>{errors.root?.message}</S.TypographyErrorMessageRoot>
      </S.WrapperRootMessage>
      <S.WrapperSignupForm>
        <S.TypographyCreateAccount
          variant="h6"
        >
          {"Já possui uma conta?"}
        </S.TypographyCreateAccount>
        <Link component={NextLink} underline="none" href={"/auth/login"}>
          <S.TypographyCreateAccount
            variant="h6"
          >
            {"Entre na plataforma"}
          </S.TypographyCreateAccount>
        </Link>
      </S.WrapperSignupForm>
    </AuthFormLayout>
  );
}

export default SignupForm;
