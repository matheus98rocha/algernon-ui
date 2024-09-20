"use client";
import React from "react";

import { Typography } from "@mui/material";

import { UserAvatar } from "../../components";

import * as S from "./profile.styles";
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
