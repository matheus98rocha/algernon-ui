"use server";

import { get } from "@/app/common/utils/fetchWrapper";
import { Book } from "../types/book.type";

export default async function getBooks() {
  return await get<Book[]>("books", ["books"]);
}
