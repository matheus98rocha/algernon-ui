import Providers from "@/app/providers";
import { Box, Grow } from "@mui/material";
import Image from "next/image";

import AlgernonLogo from '../../assets/logo-algernon.png'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers authenticated={false}>
      <>
        <Grow in={true}>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "background.default",
              gap: 10,
            }}
          >
            <Image src={AlgernonLogo} alt="algernon-log"/>
            {children}
          </Box>
        </Grow>
      </>
    </Providers>
  );
}
