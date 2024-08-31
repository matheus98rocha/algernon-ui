import { MouseEvent, useCallback, useState } from "react";

import { useHeaderReturn } from "../header.type";

export function useHeader(): useHeaderReturn {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  0;
  const handleOpenNavMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  return {
    handleOpenNavMenu,
    handleCloseNavMenu,
    anchorElNav,
  };
}
