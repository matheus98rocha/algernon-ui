"use server";

import { get } from "@/app/common/utils/fetchWrapper";
import { Book, BooksResponse } from "../types/book.type";

export async function getBooks(
  status?: string,
  page: number = 1,
  size: number = 10,
): Promise<BooksResponse> {
  const params: any = { page, size };

  if (status) {
    params.status = status;
  }

  return await get<BooksResponse>("books", params, ["books"]);
}
export async function getBooksOnGoogleApi(name: string) {
  const data = await get<Book[]>("books/googleBookApi", { name }, ["books"]);
  return [data];
}
