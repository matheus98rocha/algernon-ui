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

  const shortingValue = searchParams.get("orderBy");

  const newParams = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams],
  );

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === "") {
      // ESSA PARTE AINDA N FUNCIONA
      newParams.delete("orderBy");
    } else {
      newParams.set("orderBy", event.target.value as string);
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
              { value: "alphabetical_a_z", label: "Ordem Alfabética - A-Z" },
              { value: "alphabetical_z_a", label: "Ordem Alfabética - Z-A" },
              { value: "newest", label: "Criação - Mais Recentes Primeiro" },
              { value: "oldest", label: "Criação - Mais Antigos Primeiro" },
            ]}
          />
        </S.WrapperSelectShort>
      </S.WrapperFilterFields>
    </S.WrapperFilterBooksContainer>
  );
}

export default FilterBooksContainer;
