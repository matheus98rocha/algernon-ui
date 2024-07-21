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

function Settings({ logout }: SettingsProps) {
  const { anchorElUser, handleCloseUserMenu, handleOpenUserMenu } = useSettings(
    { logout }
  );
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
        <MenuItem key={"logout"} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{"Sair"}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Settings;
