"use server";

import { get } from "@/app/common/utils/fetchWrapper";
import { Book, BooksResponse, GetBooksParams } from "../types/book.type";

export async function getBooks({
  status,
  bookName,
  page = 1,
  size = 10,
  isFavorite,
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

  const resp = await get<BooksResponse>("books", params, ["books"]);
  return resp;
}

export async function getBooksOnGoogleApi(name: string): Promise<any[]> {
  return await get<Book[]>("books/googleBookApi", { name }, ["books"]);
}
