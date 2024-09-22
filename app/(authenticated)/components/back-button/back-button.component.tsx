"use client";
import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  handleGoBack?: () => void;
};

export function BackButton({
  handleGoBack = () => router.back(),
}: BackButtonProps) {
  const router = useRouter();
  return (
    <Box
      onClick={handleGoBack}
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
