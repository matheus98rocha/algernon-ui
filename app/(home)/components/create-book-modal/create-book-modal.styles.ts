import { Box, FormControl, Select, styled, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  boxShadow: "24px",
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
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2), // 16px
}));

export const StyledTextField = styled(TextField)(() => ({
  width: "100%",
}));

export const StyledFormControl = styled(FormControl)(() => ({
  width: "100%",
}));

export const StyledSelect = styled(Select)(() => ({
  width: "100%",
}));
