import { BookStatus } from "../../../common/types/book.type";

export type FilterBooksContainerProps = {
  statusQt: number;
  bookStatus: BookStatus;
  isFavorite: boolean;
  isBookNotFound: boolean;
};
