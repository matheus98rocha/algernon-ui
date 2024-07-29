"use client";

import { Box, styled, Typography } from "@mui/material";

export const WrapperSignupForm = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: theme.spacing(2),
}));

export const WrapperRootMessage = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const TypographyErrorMessageRoot = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: theme.typography.pxToRem(13),
}));

export const TypographyCreateAccount = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
}));
