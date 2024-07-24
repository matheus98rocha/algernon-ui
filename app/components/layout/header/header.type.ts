import { User } from "@/app/common/types/user"

export type HeaderProps = {
  logout: () => Promise<void>
  user: User
}

export type useHeaderReturn = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
  handleCloseNavMenu: () => void,
  anchorElNav: null | HTMLElement,
}