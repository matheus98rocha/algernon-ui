"use client";
import { Box, Collapse, Fab } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CreateBookModal from "../create-book-modal/create-book-modal.component";

function FloatingButton() {
  const [isOpenCreateBookModal, setisOpenCreateBookModal] = useState(false);
  const [isHoverFloatingButton, setIsHoverFloatingButton] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        right: "40px",
        bottom: "40px",
      }}
    >
      <CreateBookModal
        open={isOpenCreateBookModal}
        handleClose={() => setisOpenCreateBookModal(false)}
      />
      <Fab
        color="primary"
        variant={isHoverFloatingButton ? "extended" : "circular"}
        onMouseEnter={() => setIsHoverFloatingButton(true)}
        onMouseLeave={() => setIsHoverFloatingButton(false)}
        onClick={() => setisOpenCreateBookModal(true)}
      >
        <Collapse in={isHoverFloatingButton} exit={!isHoverFloatingButton}>
          {isHoverFloatingButton && "Criar Livro"}
        </Collapse>
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default FloatingButton;
