"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1>
        Ops... Não encontramos essa página ou pesquisa, tente novamente mais
        tarde.
      </h1>
      <Link href="/" passHref>
        Voltar para a tela inicial.
      </Link>
    </Box>
  );
}

export default NotFound;
