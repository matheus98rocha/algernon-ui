"use client";
import { Collapse, Fab } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CreateBookModal from "../create-book-modal/create-book-modal.component";

function FloatingButton() {
  const [isOpenCreateBookModal, setisOpenCreateBookModal] = useState(false);
  const [isHoverFloatingButton, setIsHoverFloatingButton] = useState(false);

  return (
    <div className="absolute right-10 bottom-10">
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
          {isHoverFloatingButton && "Create a Book"}
        </Collapse>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default FloatingButton;
