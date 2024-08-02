import { Card, styled } from "@mui/material";

export const WrapperBookCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  width: "300px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: theme.spacing(1),
  ":hover": {
    cursor: "pointer",
    boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.2)`,
  },
}));
