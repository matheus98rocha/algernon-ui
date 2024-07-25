"use client";

import { Box, styled } from "@mui/material";

export const WrapperSignupForm = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: theme.spacing(2),
}));
