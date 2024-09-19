import React from "react";

import { Box } from "@mui/material";

import Image from "next/image";

import dancingMouse from "../../../assets/dancing-mice-dancing.gif";

export function LoadingComponent() {
  return (
    <div>
      <Image src={dancingMouse} alt="dancing mouse" height={35} width={35} />
    </div>
  );
}

export function LoadingContainer() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={dancingMouse} alt="dancing mouse" height={35} width={35} />
    </Box>
  );
}
