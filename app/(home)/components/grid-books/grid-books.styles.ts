import { Grid, styled } from "@mui/material";

export const WrapperGridBooks = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: theme.spacing(2),
}));

export const WrapperBooksList = styled(Grid)<{ centered: boolean }>(
  ({ theme, centered }) => ({
    gap: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: centered ? "flex-start" : "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }),
);
