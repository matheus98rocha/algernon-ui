"use client";
import React, { useState, useMemo } from "react";
import StatusStack from "./components/status-stack/status-stack.component";
import SearchInput from "./components/search-input/search-input.component";
import { FilterBooksContainerProps } from "./filter-books-container.types";
import * as S from "./filter-books-container.styles";
import { SelectChangeEvent } from "@mui/material";
import SelectDefault from "@/app/common/components/select/select-default.component";
import { useRouter, useSearchParams } from "next/navigation";

function FilterBooksContainer({
  statusQt,
  bookStatus,
  isFavorite,
}: FilterBooksContainerProps) {
  const [bookName, setBookName] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const shortingValue = searchParams.get("shorting");

  const newParams = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams],
  );

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === "") {
      // ESSA PARTE AINDA N FUNCIONA
      newParams.delete("shorting");
    } else {
      newParams.set("shorting", event.target.value as string);
    }

    router.push(`?${newParams.toString()}`);
  };

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
          <SelectDefault
            label="Classificar por"
            value={shortingValue || ""}
            onChange={handleChange}
            options={[
              { value: "", label: "Ordem Padrão" },
              { value: "alphabetical", label: "Ordem Alfabética" },
              { value: "newest", label: "Mais Recentes Primeiro" },
              { value: "oldest", label: "Mais Antigos Primeiro" },
              {
                value: "release_year",
                label: "Ano de Lançamento - Mais Recentes",
              },
              {
                value: "release_year",
                label: "Ano de Lançamento - Mais Antigos",
              },
            ]}
          />
        </S.WrapperSelectShort>
      </S.WrapperFilterFields>
    </S.WrapperFilterBooksContainer>
  );
}

export default FilterBooksContainer;
