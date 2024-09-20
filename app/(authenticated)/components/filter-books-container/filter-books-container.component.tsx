"use client";
import React, { useState } from "react";

import { CreateBookModal } from "../modals";
import { SearchInput } from "../search-input/search-input.component";
import { SelectOrder } from "../select-order/select-order.component";
import { StatusStack } from "../status-stack/status-stack.component";

import * as S from "./filter-books-container.styles";
import { FilterBooksContainerProps } from "./filter-books-container.types";

export function FilterBooksContainer({
  statusQt,
  bookStatus,
  isFavorite,
}: FilterBooksContainerProps) {
  const [bookName, setBookName] = useState<string>("");
  const [isOpenCreateBookModal, setIsOpenCreateBookModal] = useState(false);

  return (
    <>
      <CreateBookModal
        open={isOpenCreateBookModal}
        handleClose={() => setIsOpenCreateBookModal(false)}
      />
      <S.WrapperFilterBooksContainer container>
        <StatusStack setBookName={setBookName} />
        <S.WrapperFilterFields>
          <SearchInput
            bookName={bookName}
            setBookName={setBookName}
            statusQt={statusQt}
            bookStatus={bookStatus}
            isFavorite={isFavorite}
          />
          <S.WrapperSelectShort>
            <SelectOrder />
          </S.WrapperSelectShort>
          <S.CreateBookButton onClick={() => setIsOpenCreateBookModal(true)}>
            Criar Livro
          </S.CreateBookButton>
        </S.WrapperFilterFields>
      </S.WrapperFilterBooksContainer>
    </>
  );
}

export default FilterBooksContainer;
