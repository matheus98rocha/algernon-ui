"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.back()}
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <ArrowBackIcon />
      <Typography variant="h6">Voltar</Typography>
    </Box>
  );
}

export default BackButton;
