"use client";

import React from "react";

import { Modal } from "@mui/material";

import * as S from "./modal-wrapper.styles";
import { ModalWrapperProps } from "./modal-wrapper.types";

export function ModalWrapper({
  handleCloseModal,
  open,
  customWidth,
  children,
}: ModalWrapperProps) {
  return (
    <Modal open={open} onClose={handleCloseModal}>
      <S.WrapperModalContent customWidth={customWidth}>
        {children}
      </S.WrapperModalContent>
    </Modal>
  );
}
