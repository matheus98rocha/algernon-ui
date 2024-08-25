"use client";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

import { useDialogBookOptions } from "./hooks/useDialogBookOptions";

export type DialogBookOptionsProps = {
  open: boolean;
  handleClose: () => void;
  handleFavoriteBook: (e: React.MouseEvent) => void;
  isFavorite: boolean;
  handleDeleteBook: () => void;
};

export default function DialogBookOptions({
  open,
  handleClose,
  handleFavoriteBook,
  handleDeleteBook,
  isFavorite,
}: DialogBookOptionsProps) {
  const { dialogItems, ref } = useDialogBookOptions({
    open,
    handleClose,
    handleFavoriteBook,
    handleDeleteBook,
    isFavorite,
  });

  if (!open) return;
  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: "background.paper",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 60,
        borderRadius: "5px",
        width: "250px",
        zIndex: 100,
      }}
      boxShadow={4}
      ref={ref}
    >
      <List>
        {dialogItems.map((item) => (
          <ListItemButton key={item.itemText} onClick={item.onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.itemText} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
