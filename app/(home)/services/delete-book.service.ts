"use server";
import { authDelete } from "@/app/common/utils/fetchWrapper";
import { revalidateTag } from "next/cache";

interface FavoriteBookResponse extends Error {}

export default async function deleteBook(bookId: number) {
  const res = await authDelete<FavoriteBookResponse>(
    `books/delete-book/${bookId}`,
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
