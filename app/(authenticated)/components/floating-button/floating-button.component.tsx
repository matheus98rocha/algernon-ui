"use client";
import AddIcon from "@mui/icons-material/Add";
import { Collapse, Fab } from "@mui/material";
import React, { useState } from "react";

import { WrapperForgotPassAndKeepLogged } from "./floating-button.styles";
import CreateBookModal from "../book-modals/create-book-modal/create-book-modal.component";

function FloatingButton() {
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

export default FloatingButton;
