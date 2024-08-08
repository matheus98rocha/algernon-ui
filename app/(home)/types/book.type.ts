export type BookStatus =
  | "wantToRead"
  | "alreadyRead"
  | "reading"
  | "abandoned"
  | "rereading";

export type Book = {
  id: number;
  book: string;
  description: string;
  author: string;
  status: BookStatus;
  isFavorite: boolean;
};

export type Pagination = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

export type BooksResponse = {
  data: Book[];
  pagination: Pagination;
};

export type GetBooksParams = {
  page: number;
  size?: number;
  status?: BookStatus;
  bookName?: string;
  isFavorite?: boolean | string;
};
