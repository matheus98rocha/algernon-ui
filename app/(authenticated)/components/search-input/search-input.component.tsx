"use client";
import React, { useCallback, useMemo } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment } from "@mui/material";

import { useRouter, useSearchParams } from "next/navigation";

import * as S from "./search-input.styles";
import { SearchInputProps } from "./search-input.types";

export function SearchInput({ setBookName, bookName }: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const newParams = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams],
  );

  const handleSearchBookName = () => {
    if (bookName.length === 0) {
      return;
    }

    newParams.set("bookName", bookName);

    router.push(`?${newParams.toString()}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.stopPropagation();
      event.preventDefault();
      handleSearchBookName();
    }
  };

  const handleCallGetBooksEmptyField = useCallback(() => {
    if (bookName.length === 0) {
      newParams.delete("bookName");
      router.push(`?${newParams.toString()}`);
    }
  }, [bookName.length, newParams, router]);

  React.useEffect(() => {
    handleCallGetBooksEmptyField();
  }, [bookName, handleCallGetBooksEmptyField]);

  return (
    <S.WrapperSearchInput>
      <S.StyledTextField
        placeholder={"Pesquise um Livro"}
        type="text"
        variant="outlined"
        onChange={(event) => setBookName(event.target.value)}
        onKeyDown={handleKeyDown}
        value={bookName}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <S.StyledButtonsInput>
                {bookName.length > 0 && (
                  <Button onClick={() => setBookName("")}>Limpar</Button>
                )}
                <SearchIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleSearchBookName()}
                />
              </S.StyledButtonsInput>
            </InputAdornment>
          ),
        }}
      />
    </S.WrapperSearchInput>
  );
}
