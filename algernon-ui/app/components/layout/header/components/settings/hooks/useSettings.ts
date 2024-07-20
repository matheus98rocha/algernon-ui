import React, { MouseEvent, useCallback, useState } from "react";
import { SettingsProps, useSettingsReturn } from "../settings.type";

export function useSettings({logout}:SettingsProps): useSettingsReturn {

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }, []);


  const handleCloseUserMenu = useCallback(async () => {
    await logout()
    setAnchorElUser(null);
  }, []);

  return {
    handleOpenUserMenu,
    anchorElUser,
    handleCloseUserMenu,
  };

} 