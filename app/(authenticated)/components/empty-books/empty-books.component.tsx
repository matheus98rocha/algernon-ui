import React from "react";

import { Box, Fade, Typography } from "@mui/material";

export function EmptyBooks() {
  return (
    <Fade in>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
        mt={2}
      >
        <Typography variant="h3" gutterBottom>
          Nenhum livro encontrado... <br />
          Cadastre novos no botão abaixo
        </Typography>
      </Box>
    </Fade>
  );
}
