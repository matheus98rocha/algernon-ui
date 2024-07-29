"use server";
import { authPost } from "@/app/common/utils/fetchWrapper";
import { revalidateTag } from "next/cache";

interface CreateBookResponse extends Error {}

export default async function createBook(formData: FormData) {
  const res = await authPost<CreateBookResponse>("books", formData);
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
