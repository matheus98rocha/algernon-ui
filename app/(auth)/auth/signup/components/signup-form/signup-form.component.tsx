"use client";
import {
  Box,
  CircularProgress,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { ValidatePassword } from "./components/ValidatePassword.component";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCreateUserForm } from "./hooks/useCreateUser";
import AuthFormLayout from "@/app/(auth)/auth/components/auth-form-layout/auth-form-layout.component";

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
        {...register("email")}
        label="E-mail"
        variant="outlined"
        type="email"
        helperText={errors.email?.message}
        error={!!errors.email}
      />
      <TextField
        {...register("password")}
        label="Senha"
        variant="outlined"
        type="password"
        helperText={errors.password?.message}
        error={!!errors.password}
      />
      {canShowPasswordValidation && <ValidatePassword password={password} />}
      <TextField
        {...register("confirmPassword")}
        label="Confirmar Senha"
        variant="outlined"
        type="password"
        helperText={errors.confirmPassword?.message}
        error={!!errors.confirmPassword}
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
      <span className={`text-xs text-red-500`}>{errors.root?.message}</span>
      <Box gap={1} className="flex items-center justify-center pt-2">
        <Typography
          variant="h6"
          sx={{
            fontSize: "0.9rem",
          }}
        >
          {"Já possui uma conta?"}
        </Typography>
        <Link component={NextLink} underline="none" href={"/auth/login"}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "0.9rem",
            }}
          >
            {"Entre na plataforma"}
          </Typography>
        </Link>
      </Box>
    </AuthFormLayout>
  );
}

export default SignupForm;
