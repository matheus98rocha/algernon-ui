"use client";
import React, { useCallback, useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Rating, Tooltip } from "@mui/material";

import { Book } from "@/app/common/types/book.type";

import { BookImage } from "../book-image/book-image.component";
import { BookMark } from "../bookmark/book-mark.component";
import { DialogBookOptions } from "../dialog-book-options/dialog-book-options.component";
import { ChangeBookStatusModal } from "../modals/change-book-status-modal/change-book-status-modal.component";
import { DeleteBookModal } from "../modals/delete-book-modal/delete-book-modal.component";

import * as S from "./book-card.styles";
import { useBookCard } from "./hooks/useBookCard";

export function BookCard({
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
    handleAddFavorite,
    handleOpenMoreOptionsBookCard,
    isFavorite,
    openDeleteBook,
    openMoreOptions,
    setOpenDeleteBook,
    setOpenMoreOptions,
    handleRateBook,
    setRating,
    rating,
  } = useBookCard({
    author,
    book,
    status,
    isFavorite: initialFavorite,
    description,
    id,
    imageUrl,
    rate,
  });

  const [isOpenChangeStatusModal, setIsOpenChangeStatusModal] =
    useState<boolean>(false);

  const handleChangeStatusModal = useCallback((stateModal: boolean) => {
    setIsOpenChangeStatusModal(stateModal);
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
          handleFavoriteBook={handleAddFavorite}
          isFavorite={isFavorite}
          handleDeleteBook={() => setOpenDeleteBook(true)}
        />
        <ChangeBookStatusModal
          bookId={id}
          currentBookStatus={status}
          handleCloseModal={() => handleChangeStatusModal(false)}
          open={isOpenChangeStatusModal}
        />
        <S.HeaderBookCard>
          <BookMark
            status={status}
            onClick={() => handleChangeStatusModal(true)}
          />
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
            handleRateBook({
              event,
              rating: newValue ?? 0,
            });
          }}
        />
      </S.WrapperBookCard>
    </>
  );
}
