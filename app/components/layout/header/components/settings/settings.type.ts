export type SettingsProps = {
  logout: () => Promise<void>
}
export type useSettingsReturn = {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
  anchorElUser: null | HTMLElement
  handleCloseUserMenu: () => void,
}