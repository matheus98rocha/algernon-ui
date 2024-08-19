"use client";
import React, { useState } from "react";
import { useUserContext } from "@/app/(authenticated)/contexts/user-context";
import patchUser from "@/app/(authenticated)/services/edit-user.service";
import LoadingComponent from "@/app/common/components/layout/loading/loading-component/loading-component";
import ModalWrapper from "@/app/common/components/layout/modal-wrapper/modal-wrapper.layout";
import { avatarData } from "@/app/common/utils/avatar-data";
import revalidateTag from "@/app/common/utils/revalidate-tag";
import { Box } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type ModalUserAvatarProps = {
  handleCloseModal: () => void;
  isOpenModal: boolean;
};

function ModalUserAvatar({
  handleCloseModal,
  isOpenModal,
}: ModalUserAvatarProps) {
  const { updateAvatarValue, user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeAvatar = (avatarIndex: number) => {
    setIsLoading(true);

    patchUser({ avatar: avatarIndex }).finally(() => {
      updateAvatarValue(avatarIndex);
      revalidateTag("user").finally(() => {
        setIsLoading(false);
        handleCloseModal();
      });
    });
  };

  return (
    <ModalWrapper handleCloseModal={handleCloseModal} open={isOpenModal}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h2>Escolha sua foto de perfil</h2>
              <CloseIcon
                sx={{
                  cursor: "pointer",
                }}
                onClick={handleCloseModal}
              />
            </Box>
            :
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "10px",
              }}
            >
              {avatarData.map((avatar, index) => {
                return (
                  <Box
                    sx={{
                      position: "relative",
                    }}
                    key={index}
                  >
                    <Image
                      src={avatar}
                      alt="avatar"
                      key={avatar}
                      height={100}
                      width={100}
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => handleChangeAvatar(index + 1)}
                    />
                    {user.avatar && user.avatar - 1 === index && (
                      <CheckCircleIcon
                        sx={{
                          position: "absolute",
                          bottom: 10,
                          right: 0,
                          color: "green",
                          zIndex: 10,
                        }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>
          </>
        )}
      </Box>
    </ModalWrapper>
  );
}

export default ModalUserAvatar;
