import { Grid, styled } from "@mui/material";

export const WrapperGridBooks = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: theme.spacing(2),
}));

export const WrapperBooksList = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
  alignItems: "center",
}));
