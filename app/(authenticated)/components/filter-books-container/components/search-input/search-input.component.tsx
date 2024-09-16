"use client";
import React, { useCallback, useMemo } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment } from "@mui/material";

import { useRouter, useSearchParams } from "next/navigation";

import * as S from "./search-input.styles";
import { SearchInputProps } from "./search-input.types";

function SearchInput({
  setBookName,
  bookName,
  statusQt,
  bookStatus,
  isFavorite,
}: SearchInputProps) {
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
      event.preventDefault(); // Impede o comportamento padrão do Enter
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

  const currentPlaceholder = {
    wantToRead: (statusQt: number) =>
      `Você tem ${statusQt} ${statusQt === 1 ? "livro" : "livros"} no "Quero Ler"`,
    reading: (statusQt: number) =>
      `Você está lendo ${statusQt} ${statusQt === 1 ? "livro" : "livros"}`,
    alreadyRead: (statusQt: number) =>
      `Você já leu ${statusQt} ${statusQt === 1 ? "livro" : "livros"}`,
    rereading: (statusQt: number) =>
      `Você está relendo ${statusQt} ${statusQt === 1 ? "vez" : "vezes"}`,
    abandoned: (statusQt: number) =>
      `Você abandonou ${statusQt} ${statusQt === 1 ? "vez" : "vezes"}, volte quando quiser!`,
    isFavorite: (statusQt: number) =>
      `Você tem ${statusQt} ${statusQt === 1 ? "favorito" : "favoritos"}`,
    default: (statusQt: number) =>
      `Você tem ${statusQt} ${statusQt === 1 ? "livro" : "livros"} na sua coleção`,
  };

  return (
    <S.WrapperSearchInput>
      <S.StyledTextField
        placeholder={
          statusQt === 0
            ? "Você ainda não tem livros cadastrados nesse status"
            : isFavorite
              ? currentPlaceholder.isFavorite(statusQt)
              : currentPlaceholder[bookStatus]
                ? currentPlaceholder[bookStatus](statusQt)
                : currentPlaceholder.default(statusQt)
        }
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

export default SearchInput;
