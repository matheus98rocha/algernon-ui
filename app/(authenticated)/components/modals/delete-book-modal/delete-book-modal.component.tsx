import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { ButtonLoading } from "@/app/common/components";

export type DeleteBookModalProps = {
  open: boolean;
  handleClose: () => void;
  handleDeleteBook: (e: React.MouseEvent) => void;
  isLoading: boolean;
};

export function DeleteBookModal({
  handleClose,
  open,
  handleDeleteBook,
  isLoading,
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
        <Button
          color="success"
          variant="contained"
          onClick={handleClose}
          sx={{ width: "100%" }}
        >
          Não
        </Button>
        <ButtonLoading
          buttonText="Sim"
          isLoading={isLoading}
          type={"button"}
          onClick={(e: React.MouseEvent) => handleDeleteBook(e)}
          color={"error"}
        />
      </DialogActions>
    </Dialog>
  );
}
