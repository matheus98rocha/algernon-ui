import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProvider from "./global-provider";
import authenticated from "./(auth)/services/authenticated";

const inter = Inter({ subsets: ["latin"] });

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider authenticated={isAuthenticated}>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
