import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { avatarData } from "@/app/common/utils/avatar-data";

import { useSettings } from "./hooks/useSettings";
import { SettingsProps } from "./settings.type";

function Settings({ logout, user }: SettingsProps) {
  const {
    anchorElUser,
    handleCloseUserMenu,
    handleOpenUserMenu,
    handleLogout,
  } = useSettings({ logout, user });

  const userImage = avatarData[user.avatar];

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Abrir Configurações">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {user.avatar === 0 ? (
            <Box
              sx={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#e7e8e9",

                borderRadius: "50%",
              }}
            >
              <PersonOutlinedIcon
                sx={{
                  fontSize: "40px",
                }}
              />
            </Box>
          ) : (
            <Image
              alt={user.name}
              src={userImage}
              width={50}
              height={50}
              loading="eager"
            />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key={"my-profile"} onClick={() => {}}>
          <Link
            href={"/profile"}
            style={{
              textDecoration: "none",
            }}
          >
            <Typography textAlign="center" sx={{ color: "black" }}>
              {"Meu Perfil"}
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem key={"logout"} onClick={handleLogout}>
          <Typography textAlign="center" sx={{ color: "black" }}>
            {"Sair"}
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Settings;
