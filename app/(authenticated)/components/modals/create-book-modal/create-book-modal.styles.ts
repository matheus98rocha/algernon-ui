import CloseIcon from "@mui/icons-material/Close";
import { Box, Select, styled, TextField, Typography } from "@mui/material";

export const WrapperForm = styled("form")(() => ({
  width: "100%",
}));

export const CloseIconStyled = styled(CloseIcon)(() => ({
  cursor: "pointer",
}));

export const ModalHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export const StyledTextField = styled(TextField)(() => ({
  width: "100%",
}));

export const StyledFormControl = styled("form")(() => ({
  width: "100%",
}));

export const StyledSelect = styled(Select)(() => ({
  width: "100%",
}));

export const StyledModalTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24),
  color: theme.palette.getContrastText(theme.palette.background.paper),
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  fontWeight: "bold",
  padding: "10px 0",
  marginBottom: "10px",
  textAlign: "center",
}));
