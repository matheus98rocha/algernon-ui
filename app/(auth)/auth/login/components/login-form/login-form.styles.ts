import GoogleIcon from "@mui/icons-material/Google";
import { Box, styled } from "@mui/material";

export const WrapperForgotPassAndKeepLogged = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1),
}));

export const WrapperCreateAccount = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: theme.spacing(2),
  flexDirection: "column",
  borderTop: "2px solid #E0E0E0",
  paddingTop: theme.spacing(4),
}));

export const IconGoogle = styled(GoogleIcon)(() => ({
  backgroundColor: "#1877F2",
  ":hover": {
    backgroundColor: "#1557B2",
  },
}));
