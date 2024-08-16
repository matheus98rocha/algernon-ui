import SelectDefault from "@/app/common/components/select/select-default.component";
import React from "react";
import { useSelectOder } from "./hooks/useSelectOrder";

function SelectOrder() {
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
        { value: "newest", label: "Criação - Mais Recentes Primeiro" },
        { value: "oldest", label: "Criação - Mais Antigos Primeiro" },
      ]}
    />
  );
}

export default SelectOrder;
