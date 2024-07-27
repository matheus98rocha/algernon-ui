"use server";

import { get } from "@/app/common/utils/fetchWrapper";
import { Book } from "../types/book.type";

export async function getBooks() {
  return await get<Book[]>("books", ["books"]);
}

export async function getBooksOnGoogleApi(name: string) {
  const data = await get<Book[]>("books/googleBookApi", { name }, ["books"]);
  console.log("aQUI", data);
  return [data];
}
