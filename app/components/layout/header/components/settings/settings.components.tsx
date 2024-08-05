import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useSettings } from "./hooks/useSettings";
import { SettingsProps } from "./settings.type";
import Link from "next/link";

function Settings({ logout, user }: SettingsProps) {
  const {
    anchorElUser,
    handleCloseUserMenu,
    handleOpenUserMenu,
    handleLogout,
  } = useSettings({ logout, user });
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Abrir Configurações">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
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
