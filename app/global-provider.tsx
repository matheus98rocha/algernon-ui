"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";
import darkTheme from "./theme/dark.theme";
import DefaultProgressBar from "./common/components/default-progress-bar/default-progress-bar.component";

type GlobalProvidersProps = {
  children: React.ReactNode;
  authenticated: boolean;
};

function GlobalProvider({ children }: GlobalProvidersProps) {
  return (
    <AppRouterCacheProvider>
      <DefaultProgressBar />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default GlobalProvider;
