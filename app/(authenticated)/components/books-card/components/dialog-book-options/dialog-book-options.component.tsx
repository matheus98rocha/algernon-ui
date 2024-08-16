"use client";
import React, { useEffect, useRef } from "react";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        handleClose();
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, handleClose]);

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
        <ListItemButton onClick={handleFavoriteBook}>
          <ListItemIcon>
            {isFavorite ? (
              <FavoriteIcon sx={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </ListItemIcon>
          <ListItemText
            primary={isFavorite ? "Desfavoritar Livro" : "Favoritar Livro"}
          />
        </ListItemButton>

        <ListItemButton onClick={handleDeleteBook}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary={"Deletar Livro"} />
        </ListItemButton>
      </List>
    </Box>
  );
}
