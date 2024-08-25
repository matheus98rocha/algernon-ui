"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import LoadingContainer from "@/app/common/components/layout/loading/loading.component";
import { avatarData } from "@/app/common/utils/avatar-data";

import ModalUserAvatars from "./components/modal-user-avatars/modal-user-avatars";
import * as S from "./profile.styles";
import { useUserContext } from "../../contexts/user-context";

function Profile() {
  const { user, isLoading } = useUserContext();
  const [isOpenModalEditAvatar, setIsOpenModalEditAvatar] = useState(false);

  const userImage = avatarData[user.avatar];
  const userFullName = user.name + " " + user.lastName;
  const isUndefinedAvatar = user.avatar === 0;

  return (
    <>
      <ModalUserAvatars
        handleCloseModal={() => setIsOpenModalEditAvatar(false)}
        isOpenModal={isOpenModalEditAvatar}
      />
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <S.ProfilePageWrapper>
          <S.UserProfileWrapper>
            <S.UserImageWrapper>
              {isUndefinedAvatar ? (
                <S.WrapperNoAvatarImage>
                  <S.NoAvatarIcon />
                </S.WrapperNoAvatarImage>
              ) : (
                <S.UserAvatar
                  src={userImage}
                  alt="testing-image"
                  loading="eager"
                  width={300}
                  height={300}
                />
              )}
              <S.WrapperEditAvatarIcon>
                <S.EditAvatarIcon
                  onClick={() => setIsOpenModalEditAvatar(true)}
                />
              </S.WrapperEditAvatarIcon>
            </S.UserImageWrapper>
            <Box>
              <p>{userFullName}</p>
              <p>{user.email}</p>
            </Box>
          </S.UserProfileWrapper>
          <S.FriendsWrapper>
            <Typography variant="h2">Meus amigos</Typography>
          </S.FriendsWrapper>
        </S.ProfilePageWrapper>
      )}
    </>
  );
}

export default Profile;
