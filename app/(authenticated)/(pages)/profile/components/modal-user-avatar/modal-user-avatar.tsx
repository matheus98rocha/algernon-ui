"use client";
import React from "react";
import LoadingComponent from "@/app/common/components/layout/loading/loading-component/loading-component";
import ModalWrapper from "@/app/common/components/layout/modal-wrapper/modal-wrapper.layout";
import { avatarData } from "@/app/common/utils/avatar-data";
import { Box } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useModalUserAvatar } from "./hooks/useModalUserAvatar";
import { ModalUserAvatarProps } from "./modal-user-avatar.types";
import * as S from "./modal-user-avatar.styles";

function ModalUserAvatar({
  handleCloseModal,
  isOpenModal,
}: ModalUserAvatarProps) {
  const { handleChangeAvatar, verifyIfUserHasAvatar, isLoading } =
    useModalUserAvatar({ handleCloseModal, isOpenModal });
  return (
    <ModalWrapper handleCloseModal={handleCloseModal} open={isOpenModal}>
      <S.WrapperModalUser>
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            <S.WrapperModalUserContent>
              <h2>Escolha sua foto de perfil</h2>
              <S.CloseIconStyled onClick={handleCloseModal} />
            </S.WrapperModalUserContent>

            <S.GridIconsOptions>
              {avatarData.map((avatar, index) => {
                return (
                  <S.WrapperImageAvatar key={index}>
                    <S.StyledImage
                      src={avatar}
                      alt="avatar"
                      key={avatar}
                      height={100}
                      width={100}
                      onClick={() => handleChangeAvatar(index + 1)}
                    />
                    {verifyIfUserHasAvatar(index) ? (
                      <S.CheckCircleIconStyled />
                    ) : null}
                  </S.WrapperImageAvatar>
                );
              })}
            </S.GridIconsOptions>
          </>
        )}
      </S.WrapperModalUser>
    </ModalWrapper>
  );
}

export default ModalUserAvatar;
