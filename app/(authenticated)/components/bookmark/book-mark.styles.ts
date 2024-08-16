import BookmarkIcon from "@mui/icons-material/Bookmark";
import { styled } from "@mui/material";

import { BookMarkProps } from "./book-mark.component";
const statusColors: { [key in BookMarkProps["status"]]: string } = {
  alreadyRead: "#00b300", // Lido
  wantToRead: "#00bfff", // Quero ler
  abandoned: "#000000", // Abandonei
  reading: "#ffcc00", // Lendo
  rereading: "#ff8000", // Relendo
};

export const BookmarkIconStyled = styled(BookmarkIcon)<BookMarkProps>(
  ({ status }) => ({
    color: statusColors[status],
  }),
);
