"use server";
import { authPost } from "@/app/common/utils/fetchWrapper";

interface CreateBookResponse extends Error {}

export default async function createBook(formData: FormData) {
  const res = await authPost<CreateBookResponse>("books", formData);
  console.log("->", res.result);
  if (!!res.result.message) {
    return {
      message: res.result.message,
      statusCode: res.result.statusCode,
      timestamp: res.result.timestamp,
      path: res.result.path,
    };
  }
}
