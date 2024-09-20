import React from "react";

import HideImageIcon from "@mui/icons-material/HideImage";
import { Box, Typography } from "@mui/material";

export function NotAvaibleImage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // Passar 100% da caixa de imagem.
        width: "148px",
        height: "223px",
        backgroundColor: "#E0E0E0",
        gap: 2,
      }}
    >
      <HideImageIcon color="disabled" />
      <Typography color="disabled" fontSize={12} textAlign={"center"}>
        Imagem indisponível
      </Typography>
    </Box>
  );
}
