import { Suspense } from "react";
import GridBooks from "./components/grid-books/grid-books.component";
import { getBooks } from "./services/get-books.service";
import LoadingContainer from "../components/layout/loading/loading.component";
import FilterBooksContainer from "./components/filter-books-container/filter-books-container.component";

interface BookByStatusProps {
  searchParams: {
    status:
      | "wantToRead"
      | "alreadyRead"
      | "reading"
      | "abandoned"
      | "rereading";
    page: number;
    bookName: string;
  };
}

export default async function Home({ searchParams }: BookByStatusProps) {
  const { status, page, bookName } = searchParams;

  const books = await getBooks({
    status,
    page,
    bookName,
  });

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
