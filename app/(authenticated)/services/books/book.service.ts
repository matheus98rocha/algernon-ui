"use server";
import { Book, BookStatus, GetBooksParams } from "@/app/common/types/book.type";
import { BooksGoogleApi } from "@/app/common/types/books-google-api";
import { request } from "@/app/common/utils/request";
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
  try {
    // Definindo os parâmetros da requisição
    const params: Record<string, any> = {
      page,
      size,
      ...(status && { status }),
      ...(isFavorite && { isFavorite }),
      ...(bookName && { bookName }),
      ...(orderBy && { orderBy }),
    };

    // Fazendo a requisição GET usando a função genérica `request`
    const resp = await request<GetBooksDomain>({
      method: "GET",
      input: "books",
      body: undefined,
      init: undefined,
      tags: ["books"],
      params,
    });

    console.log(resp);
    const data = bookMapper.toDomainGetAllBooks(resp.result);
    return data;
  } catch (error) {
    throw new Error("Não foi possível buscar os livros.");
  }
}

export default async function createBook(formData: CreateBookPersistence) {
  const form = bookMapper.toPersistenceCreateBook(formData);

  // Preciso tratar melhor os erros aqui...
  const res = await request<CreateBookResponse>({
    method: "POST",
    input: "books",
    body: form,
  });

  if (!res.data.ok) {
    const error = new Error(res.result.message);
    (error as any).statusCode = res.result.statusCode;
    throw error;
  } else {
    revalidateTag("books");
    return {
      message: "Success",
      statusCode: 200,
    };
  }
}

export async function getBookById(id: string): Promise<Book> {
  // Tratar erros
  const { result } = await request<Book>({
    method: "GET",
    input: `books/get-by-id/${id}`,
    tags: ["book-by-id"],
  });

  return bookMapper.toDomainGetBookById(result);
}

export async function deleteBook(bookId: number) {
  const res = await request<FavoriteBookResponse>({
    method: "DELETE",
    input: `books/delete-book/${bookId}`,
  });

  if (!res.data.ok) {
    const error = new Error(res.result.message);
    (error as any).statusCode = res.result.statusCode;
    throw error;
  } else {
    revalidateTag("books");
    return {
      message: "Success",
      statusCode: 200,
    };
  }
}

export async function getBooksOnGoogleApi(
  name: string,
): Promise<BooksGoogleApi[]> {
  // const resp = await get<BooksGoogleApi[]>("books/googleBookApi", { name }, [
  //   "books",
  // ]);

  const { result } = await request<BooksGoogleApi[]>({
    method: "GET",
    input: "books/googleBookApi",
    params: { name },
  });

  return result.map((book: BooksGoogleApi) =>
    bookMapper.toDomainGetBooksGoogleApi(book),
  );
}

export async function patchBook(bookData: Book, bookId: number) {
  const res = await request<PatchBookResponse>({
    input: `books/updateBook/${bookId}`,
    method: "PATCH",
    body: bookData,
  });

  if (!res.data.ok) {
    const error = new Error(res.result.message);
    (error as any).statusCode = res.result.statusCode;
    throw error;
  } else {
    revalidateTag("books");
    return {
      message: "Success",
      statusCode: 200,
    };
  }
}

export async function patchBookStatus(status: BookStatus, bookId: number) {
  const res = await request<PatchBookResponse>({
    input: `books/updateBookStatus/${bookId}`,
    body: {
      status,
    },
    method: "PATCH",
  });
  if (!res.data.ok) {
    const error = new Error(res.result.message);
    (error as any).statusCode = res.result.statusCode;
    throw error;
  } else {
    revalidateTag("books");
    return {
      message: "Success",
      statusCode: 200,
    };
  }
}
