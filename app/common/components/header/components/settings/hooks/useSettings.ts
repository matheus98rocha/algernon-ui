import { MouseEvent, useCallback, useState } from "react";

import { SettingsProps, useSettingsReturn } from "../settings.type";

export function useSettings({
  logout,
  user,
}: SettingsProps): useSettingsReturn {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }, []);

  const handleCloseUserMenu = useCallback(async () => {
    setAnchorElUser(null);
  }, []);

  const handleLogout = useCallback(async () => {
    const emailAuth = localStorage.getItem("emailAuthAlgernon");

    if (emailAuth) {
      localStorage.removeItem("emailAuthAlgernon");
    }
    await logout();
  }, [logout]);

  return {
    handleOpenUserMenu,
    anchorElUser,
    handleCloseUserMenu,
    handleLogout,
    user,
  };
}
