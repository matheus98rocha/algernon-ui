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
  imageUrl: string;
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

export type ResponseError = {
  message: string;
  statusCode: number;
  timestamp: string;
  path: string;
  messages: string;
};

export type GetBooksParams = {
  page: number;
  size?: number;
  status?: BookStatus;
  bookName?: string;
  isFavorite?: boolean | string;
};