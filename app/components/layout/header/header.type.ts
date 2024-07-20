export type HeaderProps = {
  logout: () => Promise<void>
}

export type useHeaderReturn = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
  handleCloseNavMenu: () => void,
  anchorElNav: null | HTMLElement,
}