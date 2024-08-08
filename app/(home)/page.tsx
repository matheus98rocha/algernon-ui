import { Suspense } from "react";
import GridBooks from "./components/grid-books/grid-books.component";
import { getBooks } from "./services/get-books.service";
import LoadingContainer from "../components/layout/loading/loading.component";
import FilterBooksContainer from "./components/filter-books-container/filter-books-container.component";

type Status =
  | "wantToRead"
  | "alreadyRead"
  | "reading"
  | "abandoned"
  | "rereading";

interface BookByStatusProps {
  searchParams: {
    status: Status;
    page: number;
    bookName: string;
    isFavorite?: boolean;
  };
}

export default async function Home({ searchParams }: BookByStatusProps) {
  const { status, page, bookName, isFavorite } = searchParams;

  const booksQuery = getBooks({
    status,
    page,
    bookName,
    isFavorite,
  });

  const [books] = await Promise.all([booksQuery]);

  return (
    <main>
      <Suspense fallback={<LoadingContainer />}>
        <FilterBooksContainer />
        <GridBooks
          books={books.data}
          totalPages={books.pagination.totalPages}
        />
      </Suspense>
    </main>
  );
}
