"use server";
import { Book, BookStatus, GetBooksParams } from "@/app/common/types/book.type";
import { BooksGoogleApi } from "@/app/common/types/books-google-api";
import {
  authDelete,
  authPatch,
  authPost,
  get,
} from "@/app/common/utils/fetchWrapper";
import revalidateTag from "@/app/common/utils/revalidate-tag";

import { bookMapper } from "./book.mapper";
import { GetBooksDomain, CreateBookPersistence } from "./book.types";

interface CreateBookResponse extends Error {}
interface FavoriteBookResponse extends Error {}
interface PatchBookResponse extends Error {}

export async function getAllBooks({
  status,
  bookName,
  page = 1,
  size = 9,
  isFavorite,
  orderBy = "newest",
}: GetBooksParams): Promise<GetBooksDomain> {
  const params: Record<string, any> = {
    page,
    size,
    ...(status && { status }),
    ...(isFavorite && { isFavorite }),
    ...(bookName && { bookName }),
    ...(orderBy && { orderBy }),
  };

  const resp = await get<GetBooksDomain>("books", params, ["books"]);
  const data = bookMapper.toDomainGetAllBooks(resp);
  return data;
}

export default async function createBook(formData: CreateBookPersistence) {
  const form = bookMapper.toPersistenceCreateBook(formData);

  const res = await authPost<CreateBookResponse>("books", form);
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

export async function getBookById(id: string): Promise<Book> {
  const resp = await get<Book>(`books/get-by-id/${id}`, ["book-by-id"]);
  const data = bookMapper.toDomainGetBookById(resp);
  return data;
}

export async function deleteBook(bookId: number) {
  const res = await authDelete<FavoriteBookResponse>(
    `books/delete-book/${bookId}`
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

export async function getBooksOnGoogleApi(
  name: string
): Promise<BooksGoogleApi[]> {
  const resp = await get<BooksGoogleApi[]>("books/googleBookApi", { name }, [
    "books",
  ]);
  const data = resp.map((book) => bookMapper.toDomainGetBooksGoogleApi(book));

  return data;
}

export async function patchBook(bookData: Book, bookId: number) {
  const res = await authPatch<PatchBookResponse>(
    `books/updateBook/${bookId}`,
    bookData
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

export async function patchBookStatus(status: BookStatus, bookId: number) {
  const res = await authPatch<PatchBookResponse>(
    `books/updateBookStatus/${bookId}`,
    { status }
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
