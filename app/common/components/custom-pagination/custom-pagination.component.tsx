"use client";
import * as React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

import { useRouter, useSearchParams } from "next/navigation";

export type CustomPaginationProps = {
  count: number;
};

export default function CustomPagination({ count }: CustomPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    // Cria uma cópia dos parâmetros da URL existentes
    const newParams = new URLSearchParams(searchParams.toString());
    // Adiciona ou atualiza o parâmetro da página
    newParams.set("page", page.toString());
    // Atualiza a URL sem remover os parâmetros existentes
    router.push(`?${newParams.toString()}`);
  };

  return (
    <Stack spacing={2}>
      <MuiPagination
        count={count}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            components={{
              previous: ArrowBackIcon,
              next: ArrowForwardIcon,
            }}
          />
        )}
      />
    </Stack>
  );
}
