import React, { memo } from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getKey: (item: T) => React.Key; // Chave única para cada item
};

const ListComponent = <T,>({ items, renderItem, getKey }: ListProps<T>) => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={getKey(item)}>
          {renderItem(item, index)}
        </React.Fragment>
      ))}
    </>
  );
};

// Memoizando o componente para evitar re-renderizações desnecessárias
export const RenderList = memo(ListComponent) as typeof ListComponent;
