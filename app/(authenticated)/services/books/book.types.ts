import { Book, BookStatus, Pagination } from "@/app/common/types/book.type";

import { createBookFormData } from "../../schema/create-book.schema";

export type GetBooksDomain = {
  data: Book[];
  pagination: Pagination;
};

export type GetBooksPersistence = {
  data: Book[];
  pagination: Pagination;
};

export type CreateBookDomain = createBookFormData;

export type CreateBookPersistence = {
  book: string;
  description: string;
  author: string;
  status: "wantToRead" | "alreadyRead" | "reading" | "rereading" | "abandoned";
  imageUrl: string;
  rate?: number;
};

export type PersistenceBookById = {
  id: number;
  book: string;
  description: string;
  author: string;
  status: BookStatus;
  isFavorite: boolean;
  imageUrl: string;
  rate: number;
};

export type BooksGoogleApiDomain = {
  title: string;
  authors: string;
  description: string;
  bookImage: string;
};

export type BooksGoogleApiPersistence = {
  title: string;
  authors: string;
  description: string;
  bookImage: string;
};
