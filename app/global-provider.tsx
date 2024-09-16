"use client";
import { useState } from "react";
import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import DefaultProgressBar from "./common/components/default-progress-bar/default-progress-bar.component";
import darkTheme from "./theme/dark.theme";

type GlobalProvidersProps = {
  children: React.ReactNode;
  authenticated: boolean;
};

function GlobalProvider({ children }: GlobalProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <AppRouterCacheProvider>
      <DefaultProgressBar />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default GlobalProvider;
