import React from "react";

import { Box } from "@mui/material";

import LoadingComponent from "./loading-component/loading-component";

function LoadingContainer() {
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
      <LoadingComponent />
    </Box>
  );
}

export default LoadingContainer;
