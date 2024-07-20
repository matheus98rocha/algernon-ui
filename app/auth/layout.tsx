import { Box, Grow } from "@mui/material";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grow in={true}>
      <Box className="h-screen flex items-center justify-center">
        {children}
      </Box>
    </Grow>
  );
}
