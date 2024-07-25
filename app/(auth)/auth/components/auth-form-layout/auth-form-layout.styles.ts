"use client";

import { Box, Stack, styled, Typography } from "@mui/material";

export const WrapperAuthFormLayout = styled(Box)(({ theme }) => ({
  boxShadow: "3px",
  width: "650px",
  borderWidth: 1,
  borderRadius: "10px",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflowY: "auto",
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
    paddingTop: theme.spacing(2),
  },
}));

export const WrapperStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },

  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(5),
  },
}));

export const WrapperBoxTitleAndChildrens = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const TitleAuthForm = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(90deg, #28220B 0%, #BCA03B 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
}));
