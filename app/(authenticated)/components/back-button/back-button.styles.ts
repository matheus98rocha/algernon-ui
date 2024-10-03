import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, styled, Typography } from "@mui/material";

export const WrapperBackButton = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

export const StyledArrowBackIcon = styled(ArrowBackIcon)(() => ({
  fontSize: "1rem",
}));

export const BackButtonTypography = styled(Typography)(() => ({
  fontSize: "1rem",
}));
