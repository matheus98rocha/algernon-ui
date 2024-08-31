import { useStore } from "@/app/(authenticated)/store/store";
import { Box, Skeleton } from "@mui/material";
import React, { useState } from "react";
import * as S from "./avatar.styles";
import { avatarData } from "@/app/common/utils/avatar-data";
import ModalUserAvatars from "../modal-user-avatars/modal-user-avatars";

function UserAvatar() {
  const { user, isLoading } = useStore();
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
        <Skeleton variant="circular" width={300} height={300} />
      ) : (
        <S.UserProfileWrapper>
          <S.UserImageWrapper>
            {isUndefinedAvatar ? (
              <S.WrapperNoAvatarImage>
                <S.NoAvatarIcon />
              </S.WrapperNoAvatarImage>
            ) : (
              <S.UserAvatarSytled
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
      )}
    </>
  );
}

export default UserAvatar;
