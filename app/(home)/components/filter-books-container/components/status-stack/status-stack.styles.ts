import { Paper, Stack, styled } from "@mui/material";

export const StackWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "scrollable",
})<{ scrollable?: boolean }>(({ theme, scrollable }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  gap: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  flexDirection: "row",
  overflowX: scrollable ? "auto" : "hidden",
  whiteSpace: scrollable ? "nowrap" : "normal",

  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const ItemStyled = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  backgroundColor: isActive ? theme.palette.primary.main : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: isActive
    ? theme.palette.primary.contrastText
    : theme.palette.text.secondary,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  boxShadow: theme.shadows[4],
  ":hover": {
    cursor: "pointer",
    boxShadow: theme.shadows[5],
  },
}));
