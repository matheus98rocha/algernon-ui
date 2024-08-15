"use server";

import { get } from "@/app/common/utils/fetchWrapper";
import { BooksResponse, GetBooksParams } from "../../common/types/book.type";
import { BooksGoogleApi } from "../../common/types/books-google-api";

export async function getBooks({
  status,
  bookName,
  page = 1,
  size = 12,
  isFavorite,
  orderBy,
}: GetBooksParams): Promise<BooksResponse> {
  const params: Record<string, any> = { page, size };

  if (status) {
    params.status = status;
  }

  if (isFavorite) {
    params.isFavorite = isFavorite;
  }

  if (bookName) {
    params.bookName = bookName;
  }

  if (orderBy) {
    params.orderBy = orderBy;
  }

  const resp = await get<BooksResponse>("books", params, ["books"]);
  return resp;
}

export async function getBooksOnGoogleApi(
  name: string,
): Promise<BooksGoogleApi[]> {
  return await get<BooksGoogleApi[]>("books/googleBookApi", { name }, [
    "books",
  ]);
}
