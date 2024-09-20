import CloseIcon from "@mui/icons-material/Close";
import { Box, Select, styled, TextField, Typography } from "@mui/material";

export const WrapperForm = styled("form")(() => ({
  width: "100%",
}));

export const WrapperModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(4),
  borderRadius: "5px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    paddingTop: theme.spacing(2),
    borderRadius: 0,
  },
}));

export const CloseIconStyled = styled(CloseIcon)(() => ({
  cursor: "pointer",
}));

export const ModalHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2), // 16px
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
