import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useRouter } from "next/navigation";

type AddNewBookModalProps = {
  handleCloseModal: () => void;
  open: boolean;
  bookName: string;
};

export function AddNewBookModal({
  handleCloseModal,
  open,
  bookName,
}: AddNewBookModalProps) {
  const router = useRouter();

  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{"Parece que você ainda não tem esse livro"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {"Deseja adicionar?"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" variant="contained" onClick={handleCloseModal}>
          Não
        </Button>
        <Button
          color="success"
          variant="contained"
          onClick={() =>
            router.push(`create-book/?bookName=${encodeURIComponent(bookName)}`)
          }
          autoFocus
        >
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
}
