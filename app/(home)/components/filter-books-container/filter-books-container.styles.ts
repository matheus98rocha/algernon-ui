import { Grid, styled } from "@mui/material";

export const WrapperFilterBooksContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));
