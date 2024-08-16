import AuthProviders from "./auth-provider";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthProviders>{children}</AuthProviders>
    </>
  );
}
