"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { getUserDetails } from "@/app/(authenticated)/services/user/user.service";
import { useStore } from "@/app/(authenticated)/store/store";
import { UserDomain } from "@/app/common/types/user";

import Settings from "./components/settings/settings.components";
import { HeaderProps } from "./header.type";
import { useHeader } from "./hooks/useHeader";

export function Header({ logout }: HeaderProps) {
  const { anchorElNav, handleCloseNavMenu, handleOpenNavMenu } = useHeader();
  const { user, setUser, setLoading } = useStore();

  const {} = useQuery({
    queryFn: async () => {
      getUserDetails()
        .then((data: UserDomain) => {
          setLoading(true);
          setUser(data);
        })
        .finally(() => setLoading(false));
    },

    queryKey: ["user-details"], //Array according to Documentation
  });

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: useTheme().shadows[1],
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Algernon
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/*
               Sera usado depois
               {protectedRoutes.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    handleCloseNavMenu;
                    router.push(page.path);
                  }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Algernon
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {protectedRoutes.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  handleCloseNavMenu();
                  router.push(page.path);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  boxShadow: "none",
                }}
              >
                {page.title}
              </Button>
            ))} */}
          </Box>
          <Settings logout={logout} user={user} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
