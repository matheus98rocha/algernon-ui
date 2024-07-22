import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { AuthFormLayoutProps } from "./auth-form-layout.types";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function AuthFormLayout<T extends FieldValues>({
  handleSubmit,
  onSubmit,
  children,
}: AuthFormLayoutProps<T>) {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        boxShadow: 3,
        width: "650px",
        borderWidth: 1,
        borderRadius: "10px",
        backgroundColor: "background.paper",
        height:onlySmallScreen ? "100vh" : "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack spacing={3} padding={onlySmallScreen ? 2 : 8}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h4"
            fontSize={32}
            sx={{
              background: "linear-gradient(90deg, #28220B 0%, #BCA03B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Algernon
          </Typography>
        </Box>
        {children}
      </Stack>
    </Box>
  );
}

export default AuthFormLayout;
