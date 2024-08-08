"use client";
import { Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchInputProps } from "./search-input.types";
import * as S from "./search-input.styles";

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
    wantToRead: `Você tem ${statusQt} no "Quero Ler"`,
    reading: `Você está lendo ${statusQt} livros`,
    alreadyRead: `Você já leu ${statusQt} livros`,
    rereading: `Você está relendo ${statusQt}`,
    abandoned: `Você abandonou ${statusQt}, volte quando quiser!`,
    isFavorite: `Você tem ${statusQt} favoritos`,
    default: `Você tem ${statusQt} livros na sua coleção`,
  };

  return (
    <S.WrapperSearchInput>
      <S.StyledTextField
        placeholder={
          isFavorite
            ? currentPlaceholder.isFavorite
            : currentPlaceholder[bookStatus] || currentPlaceholder.default
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
