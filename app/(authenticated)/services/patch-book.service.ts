"use server";
import { authPatch } from "@/app/common/utils/fetchWrapper";
import { revalidateTag } from "next/cache";
import { Book } from "../../common/types/book.type";

interface PatchBookResponse extends Error {}

export default async function patchBook(bookData: Book, bookId: number) {
  const res = await authPatch<PatchBookResponse>(
    `books/updateBook/${bookId}`,
    bookData,
  );

  if (!!res.result.message) {
    return {
      message: res.result.message,
      statusCode: res.result.statusCode,
      timestamp: res.result.timestamp,
      path: res.result.path,
    };
  } else {
    revalidateTag("books");
    return {
      message: "Success",
      statusCode: 200,
    };
  }
}
