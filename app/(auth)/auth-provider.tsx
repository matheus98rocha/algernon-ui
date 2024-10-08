"use client";

import { Box, Grow, useMediaQuery, useTheme } from "@mui/material";

import Image from "next/image";

import AlgernonLogo from "../assets/logo-algernon.png";
import { DefaultProgressBar } from "../common/components";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function AuthProviders({ children }: ProvidersProps) {
  const theme = useTheme();
  const onlyMediaScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
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
          {onlyMediaScreen && (
            <Image
              src={AlgernonLogo}
              alt="algernon-logo"
              priority
              placeholder="blur"
              sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 33vw"
              loading="eager"
            />
          )}
          <DefaultProgressBar />
          {children}
        </Box>
      </Grow>
    </>
  );
}
