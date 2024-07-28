"use server";

import { get } from "@/app/common/utils/fetchWrapper";
import { Book } from "../types/book.type";

export async function getBooks(status?: string) {
  if (status) {
    return await get<Book[]>("books", { status }, ["books"]);
  } else {
    return await get<Book[]>("books", undefined, ["books"]);
  }
}
export async function getBooksOnGoogleApi(name: string) {
  const data = await get<Book[]>("books/googleBookApi", { name }, ["books"]);
  return [data];
}
