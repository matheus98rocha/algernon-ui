"use client";
type ProvidersProps = {
  children: React.ReactNode;
};

export default function AuthenticatedProviders({ children }: ProvidersProps) {
  return <>{children}</>;
}
