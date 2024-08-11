"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";
import darkTheme from "./theme/dark.theme";
import DefaultProgressBar from "./common/components/default-progress-bar/default-progress-bar.component";
import { AuthContext } from "./(auth)/auth/contexts/auth.context/auth.context";

type GlobalProvidersProps = {
  children: React.ReactNode;
  authenticated: boolean;
};

function GlobalProvider({ children, authenticated }: GlobalProvidersProps) {
  return (
    <AppRouterCacheProvider>
      <DefaultProgressBar />
      <AuthContext.Provider value={authenticated}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AuthContext.Provider>
    </AppRouterCacheProvider>
  );
}

export default GlobalProvider;
