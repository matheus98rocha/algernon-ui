"use client";
import React, { useState } from "react";

import { AddNewBookModal } from "../modals/add-new-book-modal/add-new-book-modal.component";
import { SearchInput } from "../search-input/search-input.component";
import { SelectOrder } from "../select-order/select-order.component";
import { StatusStack } from "../status-stack/status-stack.component";

import * as S from "./filter-books-container.styles";
import { FilterBooksContainerProps } from "./filter-books-container.types";

export function FilterBooksContainer({ bookName }: FilterBooksContainerProps) {
  const [isOpenAddNewBookModal, setIsOpenAddNewBookModal] =
    useState<boolean>(false);

  return (
    <>
      <AddNewBookModal
        handleCloseModal={() => setIsOpenAddNewBookModal(false)}
        open={isOpenAddNewBookModal}
        bookName={bookName}
      />
      <S.WrapperFilterBooksContainer container>
        <StatusStack />
        <S.WrapperFilterFields>
          <SearchInput />
          <S.WrapperSelectShort>
            <SelectOrder />
          </S.WrapperSelectShort>
        </S.WrapperFilterFields>
      </S.WrapperFilterBooksContainer>
    </>
  );
}

export default FilterBooksContainer;
