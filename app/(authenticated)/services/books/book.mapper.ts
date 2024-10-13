import { Book } from "@/app/common/types/book.type";
import { BooksGoogleApi } from "@/app/common/types/books-google-api";

import {
  BooksGoogleApiPersistence,
  CreateBookDomain,
  CreateBookPersistence,
  GetBooksDomain,
  GetBooksPersistence,
  PersistenceBookById,
} from "./book.types";

class BookMapper {
  toDomainGetAllBooks(persistence: GetBooksPersistence): GetBooksDomain {
    return {
      data: persistence.data.map((book) => ({
        id: book.id,
        book: book.book,
        description: book.description,
        author: book.author,
        status: book.status,
        isFavorite: book.isFavorite,
        imageUrl: book.imageUrl,
        rate: book.rate,
      })),
      pagination: {
        page: persistence.pagination.page,
        limit: persistence.pagination.limit,
        totalItems: persistence.pagination.totalItems,
        totalPages: persistence.pagination.totalPages,
      },
    };
  }
  toDomainGetBookById(persistence: PersistenceBookById): Book {
    return {
      id: persistence.id,
      book: persistence.book,
      description: persistence.description,
      author: persistence.author,
      status: persistence.status,
      isFavorite: persistence.isFavorite,
      imageUrl: persistence.imageUrl,
      rate: persistence.rate,
    };
  }
  toPersistenceCreateBook(domain: CreateBookDomain): FormData {
    const mappedOjbect: CreateBookPersistence = {
      book: domain.book,
      description: domain.description,
      author: domain.author,
      status: domain.status,
      imageUrl: domain.imageUrl,
      rate: domain.rate,
    };

    if (mappedOjbect.status !== "alreadyRead") {
      delete mappedOjbect.rate;
    }

    const formData = new FormData();

    formData.append("book", mappedOjbect.book);
    formData.append("description", mappedOjbect.description);
    formData.append("author", mappedOjbect.author);
    formData.append("status", mappedOjbect.status);
    formData.append("imageUrl", mappedOjbect.imageUrl);

    // Verifica se o status é "alreadyRead" e se o rate não é undefined
    if (
      mappedOjbect.status === "alreadyRead" &&
      mappedOjbect.rate !== undefined
    ) {
      formData.append("rate", mappedOjbect.rate.toString()); // Converte o rate para string
    }

    return formData;
  }
  toDomainGetBooksGoogleApi(domain: BooksGoogleApiPersistence): BooksGoogleApi {
    return {
      title: domain.title,
      authors: domain.authors,
      description: domain.description,
      bookImage: domain.bookImage,
    };
  }
}

export const bookMapper = new BookMapper();
