import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import { DialogBookOptionsProps } from "../dialog-book-options.component";
import { useEffect, useRef } from "react";

export function useDialogBookOptions({
  handleDeleteBook,
  handleFavoriteBook,
  isFavorite,
  handleClose,
}: DialogBookOptionsProps) {
  const dialogItems = [
    {
      onClick: () => {},
      icon: <ShareIcon />,
      itemText: "Compartilhar livro",
    },
    {
      onClick: handleFavoriteBook,
      icon: isFavorite ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      ),
      itemText: isFavorite ? "Desfavoritar Livro" : "Favoritar Livro",
    },
    {
      onClick: handleDeleteBook,
      icon: <DeleteIcon />,
      itemText: "Deletar Livro",
    },
  ];

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
  return {
    dialogItems,
    ref,
  };
}
