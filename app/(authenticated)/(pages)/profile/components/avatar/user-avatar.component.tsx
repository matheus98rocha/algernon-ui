import { useStore } from "@/app/(authenticated)/store/store";
import { Box, Skeleton } from "@mui/material";
import React, { useState } from "react";
import * as S from "./avatar.styles";
import { avatarData } from "@/app/common/utils/avatar-data";
import ModalUserAvatars from "../modal-user-avatars/modal-user-avatars";

type UserAvatarProps = {
  type?: "full" | "small";
};

function UserAvatar({ type = "full" }: UserAvatarProps) {
  const { user, isLoading } = useStore();
  const [isOpenModalEditAvatar, setIsOpenModalEditAvatar] = useState(false);
  const userImage = avatarData[user.avatar];
  const userFullName = user.name + " " + user.lastName;
  const isUndefinedAvatar = user.avatar === 0;

  const smalSize = type === "small" ? 50 : 300;

  return (
    <>
      <ModalUserAvatars
        handleCloseModal={() => setIsOpenModalEditAvatar(false)}
        isOpenModal={isOpenModalEditAvatar}
      />
      <S.UserProfileWrapper>
        {isLoading ? (
          <Skeleton variant="circular" width={smalSize} height={smalSize} />
        ) : (
          <>
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
                  width={smalSize}
                  height={smalSize}
                />
              )}
              {type === "full" && (
                <S.WrapperEditAvatarIcon>
                  <S.EditAvatarIcon
                    onClick={() => setIsOpenModalEditAvatar(true)}
                  />
                </S.WrapperEditAvatarIcon>
              )}
            </S.UserImageWrapper>
            {type === "full" && (
              <Box>
                <p>{userFullName}</p>
                <p>{user.email}</p>
              </Box>
            )}
          </>
        )}
      </S.UserProfileWrapper>
    </>
  );
}

export default UserAvatar;
