import { Paper, Stack, styled } from "@mui/material";

export const StackWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "scrollable",
})<{ scrollable?: boolean }>(({ theme, scrollable }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginBottom: theme.spacing(2),
  gap: theme.spacing(2),
  flexDirection: "row",
  overflowX: scrollable ? "auto" : "hidden",
  whiteSpace: scrollable ? "nowrap" : "normal",

  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const ItemStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
