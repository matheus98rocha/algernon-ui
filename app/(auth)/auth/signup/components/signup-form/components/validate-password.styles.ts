import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WrapperValidatePassword = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const TextValidation = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "condition",
})<{ condition?: boolean }>(({ theme, condition }) => ({
  fontSize: theme.typography.pxToRem(12),
  fontWeight: "bold",
  color: condition ? theme.palette.success.main : theme.palette.error.main,
}));

export const ValidatePasswordContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));
