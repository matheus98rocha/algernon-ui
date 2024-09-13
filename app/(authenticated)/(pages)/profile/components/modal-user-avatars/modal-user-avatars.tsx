"use client";
import React from "react";

import LoadingComponent from "@/app/common/components/loading/loading-component/loading-component";
import ModalWrapper from "@/app/common/components/modal-wrapper/modal-wrapper.layout";
import { avatarDataArray } from "@/app/common/utils/avatar-data";

import { useModalUserAvatars } from "./hooks/useModalUserAvatars";
import * as S from "./modal-user-avatars.styles";
import { ModalUserAvatarsProps } from "./modal-user-avatars.types";
import { RenderList } from "@/app/common/components/list/list.component";

function ModalUserAvatars({
  handleCloseModal,
  isOpenModal,
}: ModalUserAvatarsProps) {
  const { handleChangeAvatar, verifyIfUserHasAvatar, isLoading } =
    useModalUserAvatars({ handleCloseModal, isOpenModal });
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
              <RenderList
                items={avatarDataArray}
                renderItem={(avatar, index) => (
                  <S.WrapperImageAvatar key={index}>
                    <S.StyledImage
                      src={avatar}
                      alt="avatar"
                      height={100}
                      width={100}
                      onClick={() => handleChangeAvatar(index + 1)}
                    />
                    {verifyIfUserHasAvatar(index) ? (
                      <S.CheckCircleIconStyled />
                    ) : null}
                  </S.WrapperImageAvatar>
                )}
                getKey={(avatar) => avatar}
              />
            </S.GridIconsOptions>
          </>
        )}
      </S.WrapperModalUser>
    </ModalWrapper>
  );
}

export default ModalUserAvatars;
