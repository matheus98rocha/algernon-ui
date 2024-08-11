"use client";
import React, { useState, useCallback } from "react";
import * as S from "./book-card.styles";
import Image from "next/image";
import favoriteBook from "@/app/(home)/services/favorite-book.service";
import NotAvaibleImage from "@/app/common/components/not-avaible-image/not-avaible-image.component";
import { Book } from "@/app/common/types/book.type";
import BookMark from "../bookmark/book-mark.component";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import deleteBook from "../../services/delete-book.service";
import DialogBookOptions from "./components/dialog-book-options/dialog-book-options.component";
import DeleteBookModal from "../book-modals/delete-book-modal/delete-book-modal.component";
import { Box, Tooltip } from "@mui/material";

function BookCard({
  author,
  book,
  status,
  isFavorite: initialFavorite,
  description,
  id,
  imageUrl,
}: Book) {
  const [isFavorite, setIsFavorite] = useState<boolean>(initialFavorite);
  const [openMoreOptions, setOpenMoreOptions] = useState<boolean>(false);
  const [openDeleteBook, setOpenDeleteBook] = useState<boolean>(false);

  const handleFavoriteClick = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      const updatedFavorite = !isFavorite;
      setIsFavorite(updatedFavorite);
      await favoriteBook(
        {
          author,
          book,
          status,
          description,
          id,
          isFavorite: updatedFavorite,
          imageUrl,
        },
        id
      );
    },
    [author, book, status, description, id, isFavorite, imageUrl]
  );

  const handleDeleteBook = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      await deleteBook(id);
      setOpenDeleteBook(false);
    },
    [id]
  );

  const handleOpenMoreOptionsBookCard = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenMoreOptions(!openMoreOptions);
  }, []);

  return (
    <>
      <S.WrapperBookCard sx={{ position: "relative" }}>
        <DeleteBookModal
          handleClose={() => setOpenDeleteBook(false)}
          handleDeleteBook={(e: React.MouseEvent) => handleDeleteBook(e)}
          open={openDeleteBook}
        />
        <DialogBookOptions
          handleClose={() => setOpenMoreOptions(false)}
          open={openMoreOptions}
          handleFavoriteBook={handleFavoriteClick}
          isFavorite={isFavorite}
          handleDeleteBook={() => setOpenDeleteBook(true)}
        />
        <S.HeaderBookCard>
          <BookMark status={status} />
          <MoreHorizIcon
            sx={{ zIndex: 2, cursor: "pointer" }}
            onClick={(event) => handleOpenMoreOptionsBookCard(event)}
          />
        </S.HeaderBookCard>
        <Tooltip title={book}>
          <S.BookTitle variant="h6">{book}</S.BookTitle>
        </Tooltip>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "148px",
            height: "223px",
          }}
        >
          {imageUrl === "" ? (
            <NotAvaibleImage />
          ) : (
            <Image
              src={imageUrl}
              alt="book image"
              width={148}
              height={223}
              loading="eager"
            />
          )}
        </Box>
        <S.BookAuthor variant="body2">{author}</S.BookAuthor>
      </S.WrapperBookCard>
    </>
  );
}

export default BookCard;
