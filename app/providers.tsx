"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./theme/dark.theme";
import { AuthContext } from "./(auth)/auth/contexts/auth.context/auth.context";
import DefaultProgressBar from "./components/default-progress-bar/default-progress-bar.component";

type ProvidersProps = {
  children: React.ReactNode;
  authenticated: boolean;
};

export default function Providers({ children, authenticated }: ProvidersProps) {
  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={darkTheme}>
          <AuthContext.Provider value={authenticated}>
            <DefaultProgressBar />
            {children}
          </AuthContext.Provider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
}
