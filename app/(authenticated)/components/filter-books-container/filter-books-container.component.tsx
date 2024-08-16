"use client";
import React, { useState } from "react";
import StatusStack from "./components/status-stack/status-stack.component";
import SearchInput from "./components/search-input/search-input.component";
import { FilterBooksContainerProps } from "./filter-books-container.types";
import * as S from "./filter-books-container.styles";
import SelectOrder from "./components/select-order/select-order.component";
function FilterBooksContainer({
  statusQt,
  bookStatus,
  isFavorite,
}: FilterBooksContainerProps) {
  const [bookName, setBookName] = useState<string>("");

  return (
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
      </S.WrapperFilterFields>
    </S.WrapperFilterBooksContainer>
  );
}

export default FilterBooksContainer;
