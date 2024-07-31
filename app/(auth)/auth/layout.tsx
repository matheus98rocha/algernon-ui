"use client";
import {
  Box,
  Grow,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

import AlgernonLogo from "../../assets/logo-algernon.png";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import darkTheme from "@/app/theme/dark.theme";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const onlyMediaScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <Grow in={true}>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "background.default",
              gap: 10,
            }}
          >
            {onlyMediaScreen && (
              <Image
                src={AlgernonLogo}
                alt="algernon-logo"
                priority
                placeholder="blur"
                sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 33vw"
                loading="eager"
              />
            )}
            {children}
          </Box>
        </Grow>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
