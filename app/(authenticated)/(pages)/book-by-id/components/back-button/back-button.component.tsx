"use client";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { Box, Typography } from "@mui/material";

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
