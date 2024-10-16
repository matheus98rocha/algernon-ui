import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Box, styled } from "@mui/material";

import Image from "next/image";

export const UserProfileWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const UserImageWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e7e8e9",

  borderRadius: "50%",
  position: "relative",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
}));

interface WrapperNoAvatarImageProps {
  isSmall?: boolean;
}

interface NoAvatarIconProps {
  isSmall?: boolean;
}

export const WrapperNoAvatarImage = styled(Box)<WrapperNoAvatarImageProps>(
  ({ isSmall }) => ({
    width: isSmall ? "50px" : "300px",
    height: isSmall ? "50px" : "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
);
export const NoAvatarIcon = styled(PersonOutlinedIcon)<NoAvatarIconProps>(
  ({ isSmall }) => ({
    fontSize: isSmall ? "30px" : "240px",
  }),
);
export const UserAvatarSytled = styled(Image)(() => ({
  borderRadius: "50%",
  paddingBottom: "10px",
}));

export const WrapperEditAvatarIcon = styled(Box)(() => ({
  position: "absolute",
  bottom: "40px",
  right: "7px",
  borderRadius: "50%",
  backgroundColor: "#e7e8e9",
  padding: "5px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
}));

export const EditAvatarIcon = styled(ModeEditOutlineOutlinedIcon)(() => ({
  fontSize: "35px",
}));
