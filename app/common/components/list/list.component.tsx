import React, { memo } from "react";

import { ListProps } from "./list.types";

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
