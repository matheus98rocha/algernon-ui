"use client";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Collapse, Fab } from "@mui/material";

import { CreateBookModal } from "../modals/create-book-modal/create-book-modal.component";

import { WrapperForgotPassAndKeepLogged } from "./floating-button.styles";

export function FloatingButton() {
  const [isOpenCreateBookModal, setisOpenCreateBookModal] = useState(false);
  const [isHoverFloatingButton, setIsHoverFloatingButton] = useState(false);

  return (
    <WrapperForgotPassAndKeepLogged>
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
    </WrapperForgotPassAndKeepLogged>
  );
}
