import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "../globals.css";

import { Container, CssBaseline } from "@mui/material";
import authenticated from "../(auth)/auth/services/authenticated";
import Providers from "../providers";
import Header from "../components/layout/header/header.component";
import logout from "../(auth)/auth/services/logout";
import getUserDetails from "./services/get-user-details.service";

const inter = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algernon",
  description: "An app for save your favorites books",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = authenticated();
  const user = await getUserDetails();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers authenticated={isAuthenticated}>
          <CssBaseline />
          <Header logout={logout} user={user} />
          <Container
            sx={{
              marginTop: "42px",
            }}
          >
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
