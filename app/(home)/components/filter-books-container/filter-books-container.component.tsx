"use client";
import React, { useState } from "react";
import StatusStack from "./components/status-stack/status-stack.component";
import SearchInput from "./components/search-input/search-input.component";
import { FilterBooksContainerProps } from "./filter-books-container.types";
import { WrapperFilterBooksContainer } from "./filter-books-container.styles";

function FilterBooksContainer({
  statusQt,
  bookStatus,
  isFavorite,
}: FilterBooksContainerProps) {
  const [bookName, setBookName] = useState<string>("");
  return (
    <WrapperFilterBooksContainer container>
      <StatusStack setBookName={setBookName} />
      <SearchInput
        bookName={bookName}
        setBookName={setBookName}
        statusQt={statusQt}
        bookStatus={bookStatus}
        isFavorite={isFavorite}
      />
    </WrapperFilterBooksContainer>
  );
}

export default FilterBooksContainer;
