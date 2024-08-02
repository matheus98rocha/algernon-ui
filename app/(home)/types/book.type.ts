export type Book = {
  id: number;
  book: string;
  description: string;
  author: string;
  status: "wantToRead" | "alreadyRead" | "reading" | "abandoned" | "rereading";
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
