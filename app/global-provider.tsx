"use client";
import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { DefaultProgressBar } from "./common/components";
import { ToastProvider } from "./contexts/toast.context";
import darkTheme from "./theme/dark.theme";

type GlobalProvidersProps = {
  children: React.ReactNode;
  authenticated: boolean;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
    },
  },
});

function GlobalProvider({ children }: GlobalProvidersProps) {
  return (
    <AppRouterCacheProvider>
      <DefaultProgressBar />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <ToastProvider>{children}</ToastProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default GlobalProvider;
