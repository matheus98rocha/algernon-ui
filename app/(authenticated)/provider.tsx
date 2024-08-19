"use client";

import AuthenticatedProvider from "./contexts/user-context";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function AuthenticatedProviders({ children }: ProvidersProps) {
  return <AuthenticatedProvider>{children}</AuthenticatedProvider>;
}
