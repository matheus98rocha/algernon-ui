import React from "react";

import { Modal } from "@mui/material";

import * as S from "./modal-wrapper.styles";

export type ModalWrapperProps = {
  open: boolean;
  handleCloseModal: () => void;
  customWidth?: string;
  children: React.ReactNode;
};

function ModalWrapper({
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

export default ModalWrapper;
