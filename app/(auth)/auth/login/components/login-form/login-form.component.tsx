"use client";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Link,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useLoginUserForm } from "./hooks/useLoginUser";
import AuthFormLayout from "@/app/(auth)/auth/components/auth-form-layout/auth-form-layout.component";

import FacebookIcon from "@mui/icons-material/Facebook";
import googleIcon from "../../../../../assets/google.svg";

import Image from "next/image";

function LoginForm() {
  const { errors, handleSubmit, onSubmit, register, isLoading } =
    useLoginUserForm();

  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
      <TextField
        {...register("password")}
        label="Senha"
        variant="outlined"
        type="password"
        helperText={errors.password?.message}
        error={!!errors.password}
      />
      <LoadingButton
        type={"submit"}
        variant="contained"
        loading={isLoading}
        loadingPosition="center"
        loadingIndicator={<CircularProgress color="info" size={16} />}
      >
        {"Entrar"}
      </LoadingButton>
      <Box gap={1} className="flex items-center justify-between pt-2">
        <FormControlLabel control={<Checkbox />} label="Continuar conectado" />
        <Link component={Link} href="/auth/forgot" color={"#1877F2"}>
          {"Esqueceu sua senha?"}
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: onlySmallScreen ? "1fr" : "1fr 1fr",
          gap: onlySmallScreen ? 3 : 0,
          borderTop: "2px solid #E0E0E0",
          paddingTop: 4,
        }}
      >
        <Button
          LinkComponent={Link}
          href="/auth/signup"
          variant="contained"
          type={"button"}
        >
          Criar conta
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FacebookIcon
            sx={{
              width: 42,
              height: 42,
              color: "#1877F2",
              ":hover": {
                cursor: "pointer",
              },
            }}
          />
          <Box
            sx={{
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            <Image src={googleIcon} alt="Google Icon" height={32} width={32} />
          </Box>
        </Box>
      </Box>
    </AuthFormLayout>
  );
}

export default LoginForm;
