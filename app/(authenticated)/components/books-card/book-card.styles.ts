import { Box, Card, styled, Typography } from "@mui/material";

export const WrapperBookCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "300px",
  height: "400px",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  boxShadow: theme.shadows[1],
  ":hover": {
    boxShadow: theme.shadows[2],
  },
}));

export const BookTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
  width: "300px",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  textAlign: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}));

export const BookAuthor = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontStyle: "italic",
  color: theme.palette.text.secondary,
}));

export const HeaderBookCard = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));
