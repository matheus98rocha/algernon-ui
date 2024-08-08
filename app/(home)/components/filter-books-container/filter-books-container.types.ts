import { BookStatus } from "../../types/book.type";

export type FilterBooksContainerProps = {
  statusQt: number;
  bookStatus: BookStatus;
  isFavorite: boolean;
};
