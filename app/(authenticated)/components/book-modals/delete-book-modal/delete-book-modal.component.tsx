import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export type DeleteBookModalProps = {
  open: boolean;
  handleClose: () => void;
  handleDeleteBook: (e: React.MouseEvent) => void;
};

export default function DeleteBookModal({
  handleClose,
  open,
  handleDeleteBook,
}: DeleteBookModalProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Você tem certeza ?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {"Deseja realmente apagar esse livro?"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="success" variant="contained" onClick={handleClose}>
          Não
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={handleDeleteBook}
          autoFocus
        >
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
}
