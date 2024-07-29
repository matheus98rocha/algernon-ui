import { User } from "@/app/common/types/user";

export type SettingsProps = {
  logout: () => Promise<void>;
  user: User;
};
export type useSettingsReturn = {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: () => void;
  handleLogout: () => void;
  user: User;
};
