import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import Header from "./components/header/header.component";
import Providers from "./providers";
import authenticated from "./auth/services/authenticated";
import logout from "./auth/services/logout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoppy",
  description: "Ecommerce Application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = authenticated();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers authenticated={isAuthenticated}>
          <CssBaseline />
          <Header logout={logout} />
          <Container>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
