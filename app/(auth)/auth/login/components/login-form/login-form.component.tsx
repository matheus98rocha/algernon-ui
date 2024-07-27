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
import GoogleIcon from "@mui/icons-material/Google";
import TextFieldPassword from "@/app/components/inputs/text-field-password/text-field-password";
import LoadingComponent from "@/app/components/layout/loading/loading-component/loading-component";

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
      <TextFieldPassword
        register={register}
        registerOption="password"
        errors={errors}
        label="Senha"
      />
      <LoadingButton
        type={"submit"}
        variant="contained"
        loading={isLoading}
        loadingPosition="center"
        loadingIndicator={<LoadingComponent />}
      >
        {"Entrar"}
      </LoadingButton>
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
          display: "grid",
          gridTemplateColumns: onlySmallScreen ? "1fr" : "1fr 1fr",
          justifyContent: "space-between",
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
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FacebookIcon
            sx={{
              width: 40,
              height: 40,
              color: "#1877F2",
              ":hover": {
                cursor: "pointer",
              },
            }}
          />
          <GoogleIcon
            sx={{
              width: 40,
              height: 40,
              color: "#DB4437",
              ":hover": {
                cursor: "pointer",
              },
            }}
          />
        </Box>
      </Box>
    </AuthFormLayout>
  );
}

export default LoginForm;
