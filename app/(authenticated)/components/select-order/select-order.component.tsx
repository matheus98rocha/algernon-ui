import React from "react";

import { SelectDefault } from "@/app/common/components";

import { useSelectOder } from "./hooks/useSelectOrder";

export function SelectOrder() {
  const { handleChange, shortingValue } = useSelectOder();
  return (
    <SelectDefault
      label="Classificar por"
      value={shortingValue}
      onChange={handleChange}
      options={[
        { value: "", label: "Ordem Padrão" },
        { value: "alphabetical_a_z", label: "Ordem Alfabética - A-Z" },
        { value: "alphabetical_z_a", label: "Ordem Alfabética - Z-A" },
        { value: "oldest", label: "Criação - Mais Antigos Primeiro" },
        { value: "most_rated", label: "Avaliação - Mais Popular Primeiro" },
        { value: "least_rated", label: "Avaliação - Menos Popular Primeiro" },
      ]}
    />
  );
}
