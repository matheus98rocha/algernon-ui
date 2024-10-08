import { Container } from "@mui/material";

import type { Metadata } from "next";
import "../globals.css";

import logout from "../(auth)/services/logout";
import { Header } from "../common/components";

import AuthenticatedProviders from "./provider";

export const metadata: Metadata = {
  title: "Algernon",
  description: "An app for save your favorites books",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthenticatedProviders>
      <Header logout={logout} />
      <Container
        sx={{
          marginTop: "42px",
        }}
      >
        {children}
      </Container>
    </AuthenticatedProviders>
  );
}
