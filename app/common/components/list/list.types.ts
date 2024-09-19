export type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getKey: (item: T) => React.Key; // Chave única para cada item
};
