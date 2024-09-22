"use client";
import React, { useEffect, useState } from "react";

import { AddNewBookModal } from "../modals/add-new-book-modal/add-new-book-modal.component";
import { SearchInput } from "../search-input/search-input.component";
import { SelectOrder } from "../select-order/select-order.component";
import { StatusStack } from "../status-stack/status-stack.component";

import * as S from "./filter-books-container.styles";
import { FilterBooksContainerProps } from "./filter-books-container.types";

export function FilterBooksContainer({
  statusQt,
  bookStatus,
  isFavorite,
  isBookNotFound,
}: FilterBooksContainerProps) {
  const [bookName, setBookName] = useState<string>("");
  const [isOpenAddNewBookModal, setIsOpenAddNewBookModal] =
    useState<boolean>(false);

  // Sincroniza o modal com o valor de isBookNotFound
  useEffect(() => {
    setIsOpenAddNewBookModal(isBookNotFound);
  }, [isBookNotFound]);
  return (
    <>
      <AddNewBookModal
        handleCloseModal={() => setIsOpenAddNewBookModal(false)}
        open={isOpenAddNewBookModal}
        bookName={bookName}
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
          {/* <S.CreateBookButton onClick={() => setIsOpenSearchBookModal(true)}>
            Criar Livro
          </S.CreateBookButton> */}
        </S.WrapperFilterFields>
      </S.WrapperFilterBooksContainer>
    </>
  );
}

export default FilterBooksContainer;
