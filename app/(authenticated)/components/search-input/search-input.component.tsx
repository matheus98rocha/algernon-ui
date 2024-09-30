"use client";
import React, { useMemo } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment } from "@mui/material";

import { useRouter, useSearchParams } from "next/navigation";

import * as S from "./search-input.styles";

export function SearchInput() {
  const searchParams = useSearchParams();
  const initialBookName = searchParams.get("bookName") || "";
  const [bookName, setBookName] = React.useState<string>(initialBookName);
  const router = useRouter();

  const newParams = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const handleSearchBookName = () => {
    if (bookName.length === 0) {
      newParams.delete("bookName"); // Remove o parâmetro quando estiver vazio
    } else {
      newParams.set("bookName", bookName); // Adiciona/atualiza o parâmetro
    }

    router.push(`?${newParams.toString()}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.stopPropagation();
      event.preventDefault();
      handleSearchBookName();
    }
  };

  const handleClearBookName = () => {
    setBookName(""); // Limpa o estado
    newParams.delete("bookName"); // Remove o parâmetro da URL
    router.push(`?${newParams.toString()}`); // Atualiza a URL
  };

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
                  <Button onClick={handleClearBookName}>Limpar</Button>
                )}
                <SearchIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={handleSearchBookName}
                />
              </S.StyledButtonsInput>
            </InputAdornment>
          ),
        }}
      />
    </S.WrapperSearchInput>
  );
}
