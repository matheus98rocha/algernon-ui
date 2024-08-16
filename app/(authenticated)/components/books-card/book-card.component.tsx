"use client";
import React from "react";
import * as S from "./book-card.styles";
import { Book } from "@/app/common/types/book.type";
import BookMark from "../bookmark/book-mark.component";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DialogBookOptions from "./components/dialog-book-options/dialog-book-options.component";
import DeleteBookModal from "../book-modals/delete-book-modal/delete-book-modal.component";
import { Rating, Tooltip } from "@mui/material";
import { useBookCard } from "./hooks/useBookCard";
import BookImage from "./components/book-image/book-image.component";

function BookCard({
  author,
  book,
  status,
  isFavorite: initialFavorite,
  description,
  id,
  imageUrl,
  rate,
}: Book) {
  const {
    handleDeleteBook,
    handleFavoriteClick,
    handleOpenMoreOptionsBookCard,
    isFavorite,
    openDeleteBook,
    openMoreOptions,
    setOpenDeleteBook,
    setOpenMoreOptions,
    handleRateBookClick,
    setRating,
    rating
  } = useBookCard({
    author,
    book,
    status,
    isFavorite: initialFavorite,
    description,
    id,
    imageUrl,
    rate
  });

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
        <BookImage id={id} imageUrl={imageUrl} />
        <S.BookAuthor variant="body2">{author}</S.BookAuthor>

        <Rating
          name="hover-feedback"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue ?? 0);
            handleRateBookClick(event, newValue ?? 0);
          }}
        />
      </S.WrapperBookCard>
    </>
  );
}

export default BookCard;
