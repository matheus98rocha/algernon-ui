"use server";

import { get } from "@/app/common/utils/fetchWrapper";
import { Book, BooksResponse, GetBooksParams } from "../types/book.type";

export async function getBooks({
  status,
  bookName,
  page = 1,
  size = 10,
}: GetBooksParams): Promise<BooksResponse> {
  const params: Record<string, any> = { page, size };

  if (status) {
    params.status = status;
  }

  if (bookName) {
    params.bookName = bookName;
  }

  try {
    return await get<BooksResponse>("books", params, ["books"]);
  } catch (error) {
    console.error("Failed to fetch books:", error);
    throw error;
  }
}

export async function getBooksOnGoogleApi(name: string): Promise<Book[]> {
  try {
    return await get<Book[]>("books/googleBookApi", { name }, ["books"]);
  } catch (error) {
    console.error("Failed to fetch books from Google API:", error);
    throw error;
  }
}
