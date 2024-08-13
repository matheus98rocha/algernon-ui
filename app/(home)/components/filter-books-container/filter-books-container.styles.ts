import { Box, Grid, styled } from "@mui/material";

export const WrapperFilterBooksContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const WrapperFilterFields = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  width: "100%",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const WrapperSelectShort = styled(Box)(({ theme }) => ({
  width: "220px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
