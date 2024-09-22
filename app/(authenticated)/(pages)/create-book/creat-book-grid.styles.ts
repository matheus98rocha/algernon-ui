import { Grid, styled } from "@mui/material";

export const WrapperBooksList = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: theme.spacing(15),
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
  },
}));
