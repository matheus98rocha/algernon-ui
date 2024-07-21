import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { AuthFormLayoutProps } from "./auth-form-layout.types";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function AuthFormLayout<T extends FieldValues>({
  handleSubmit,
  onSubmit,
  titleForm,
  children,
}: AuthFormLayoutProps<T>) {
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md border rounded-lg"
      sx={{
        boxShadow: 3,
      }}
    >
      <Stack spacing={3} padding={8}>
        <Box 
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2
          }}
        >
          <MenuBookIcon color="secondary"/>
          <Typography variant="h4" fontSize={"1.3rem"} color={"secondary"}>{titleForm}</Typography>
        </Box>
        {children}
      </Stack>
    </Box>
  );
}

export default AuthFormLayout;
