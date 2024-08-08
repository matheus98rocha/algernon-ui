import { Box, styled, TextField } from "@mui/material";

export const WrapperSearchInput = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledButtonsInput = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
}));
