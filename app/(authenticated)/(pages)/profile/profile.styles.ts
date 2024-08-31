import { Box, styled } from "@mui/material";

export const ProfilePageWrapper = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
}));

export const FriendsWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));
