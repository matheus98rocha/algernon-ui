"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useUserContext } from "../../contexts/user-context";
import LoadingContainer from "@/app/common/components/layout/loading/loading.component";
import { Box } from "@mui/material";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { avatarData } from "@/app/common/utils/avatar-data";
import ModalUserAvatar from "./components/modal-user-avatar/modal-user-avatar";

function Profile() {
  const { user, isLoading } = useUserContext();
  const [isOpenModalEditAvatar, setIsOpenModalEditAvatar] = useState(false);
  const userImage = avatarData[(user.avatar ?? 1) - 1];

  return (
    <>
      <ModalUserAvatar
        handleCloseModal={() => setIsOpenModalEditAvatar(false)}
        isOpenModal={isOpenModalEditAvatar}
      />
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#e7e8e9",

                borderRadius: "50%",
                position: "relative",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              {user.avatar === 0 ? (
                <Box
                  sx={{
                    width: "300px",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PersonOutlinedIcon
                    sx={{
                      fontSize: "240px",
                    }}
                  />
                </Box>
              ) : (
                <Image
                  src={userImage}
                  alt="testing-image"
                  loading="eager"
                  width={300}
                  height={300}
                  style={{
                    borderRadius: "50%",
                    paddingBottom: "10px",
                  }}
                />
              )}
              <div
                style={{
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
                }}
              >
                <ModeEditOutlineOutlinedIcon
                  sx={{
                    fontSize: "35px",
                  }}
                  onClick={() => setIsOpenModalEditAvatar(true)}
                />
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <p>{user.name + " " + user.lastName}</p>
              <p>{user.email}</p>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h2>Meus amigos</h2>
          </Box>
        </div>
      )}
    </>
  );
}

export default Profile;
