import type { Metadata } from "next";
import "../globals.css";

import { Container } from "@mui/material";
import Header from "../common/components/layout/header/header.component";
import FloatingButton from "./components/floating-button/floating-button.component";
import logout from "../(auth)/services/logout";
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
        <FloatingButton />
      </Container>
    </AuthenticatedProviders>
  );
}
