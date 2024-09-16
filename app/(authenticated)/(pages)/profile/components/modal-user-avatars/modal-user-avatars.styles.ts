import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, styled } from "@mui/material";

import Image from "next/image";

export const WrapperModalUser = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(3),
}));

export const WrapperModalUserContent = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

export const CloseIconStyled = styled(CloseIcon)(() => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

export const GridIconsOptions = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: theme.spacing(3),
}));

export const WrapperImageAvatar = styled(Box)(() => ({
  position: "relative",
}));

export const StyledImage = styled(Image)(() => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

export const CheckCircleIconStyled = styled(CheckCircleIcon)(() => ({
  position: "absolute",
  bottom: 10,
  right: 0,
  color: "green",
  zIndex: 10,
}));
