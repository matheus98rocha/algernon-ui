"use client";
import { Typography } from "@mui/material";
import React from "react";
import * as S from "./profile.styles";
import UserAvatar from "./components/avatar/user-avatar.component";
function Profile() {
  return (
    <>
      <S.ProfilePageWrapper>
        <UserAvatar />
        <S.FriendsWrapper>
          <Typography variant="h2">Meus amigos</Typography>
        </S.FriendsWrapper>
      </S.ProfilePageWrapper>
    </>
  );
}

export default Profile;
