import { Suspense } from "react";

import FilterBooksContainer from "./components/filter-books-container/filter-books-container.component";
import GridBooks from "./components/grid-books/grid-books.component";
import { getAllBooks } from "./services/books/book.service";
import LoadingContainer from "../common/components/loading/loading.component";
import { BookStatus } from "../common/types/book.type";

export type orderByOptions =
  | "alphabetical_a_z"
  | "alphabetical_z_a"
  | "newest"
  | "oldest"
  | "most_rated"
  | "least_rated";

interface BookByStatusProps {
  searchParams: {
    status: BookStatus;
    page: number;
    bookName: string;
    isFavorite?: boolean;
    orderBy?: orderByOptions;
  };
}

export default async function Home({ searchParams }: BookByStatusProps) {
  const { status, page, bookName, isFavorite, orderBy } = searchParams;

  const booksQuery = getAllBooks({
    status,
    page,
    bookName,
    isFavorite,
    orderBy,
  });

  const [books] = await Promise.all([booksQuery]);

  return (
    <main>
      <FilterBooksContainer
        statusQt={books.pagination.totalItems}
        bookStatus={status}
        isFavorite={isFavorite ?? false}
      />
      <Suspense fallback={<LoadingContainer />}>
        <GridBooks
          books={books.data}
          totalPages={books.pagination.totalPages}
        />
      </Suspense>
    </main>
  );
}
