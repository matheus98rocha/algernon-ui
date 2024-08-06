"use client";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SearchInput({ setBookName, bookName }: any) {
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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "95%",
      }}
    >
      <TextField
        sx={{
          width: "100%",
          backgroundColor: "#fff",
        }}
        placeholder="Pesquise um livro"
        type="text"
        variant="outlined"
        onChange={(event) => setBookName(event.target.value)}
        onKeyDown={handleKeyDown}
        value={bookName}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {bookName.length > 0 && (
                  <Button onClick={() => setBookName("")}>Limpar</Button>
                )}
                <SearchIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleSearchBookName()}
                />
              </Box>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchInput;
