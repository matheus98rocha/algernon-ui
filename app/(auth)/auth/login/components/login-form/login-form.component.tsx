"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
} from "@mui/material";
import React from "react";
import { useLoginUserForm } from "./hooks/useLoginUser";
import AuthFormLayout from "@/app/(auth)/auth/components/auth-form-layout/auth-form-layout.component";

import GoogleIcon from "@mui/icons-material/Google";
import TextFieldPassword from "@/app/components/inputs/text-field-password/text-field-password";
import ButtonLoading from "@/app/components/buttons/button-loading/button-loading.component";

function LoginForm() {
  const { errors, handleSubmit, onSubmit, register, isLoading } =
    useLoginUserForm();

  return (
    <AuthFormLayout
      titleForm={"Acesse sua conta"}
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
      <TextFieldPassword
        register={register}
        registerOption="password"
        errors={errors}
        label="Senha"
      />
      <ButtonLoading
        buttonText="Entrar"
        isLoading={isLoading}
        type={"submit"}
      />
      <Box gap={1} className="flex items-center justify-between pt-2">
        <FormControlLabel
          control={<Checkbox />}
          label="Manter dados salvos"
          {...register("keepData")}
        />
        <Link component={Link} href="/auth/forgot" color={"#1877F2"}>
          {"Esqueceu sua senha?"}
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 2,
          flexDirection: "column",
          borderTop: "2px solid #E0E0E0",
          paddingTop: 4,
        }}
      >
        <Button
          LinkComponent={Link}
          href="/auth/signup"
          variant="contained"
          type={"button"}
          sx={{
            width: "100%",
          }}
        >
          Criar conta
        </Button>
        <Button
          variant="contained"
          type={"button"}
          sx={{
            width: "100%",
            backgroundColor: "#1877F2",
            ":hover": {
              backgroundColor: "#1557B2",
            },
          }}
          startIcon={
            <GoogleIcon
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
          }
        >
          Continuar com o Google
        </Button>
      </Box>
    </AuthFormLayout>
  );
}

export default LoginForm;
