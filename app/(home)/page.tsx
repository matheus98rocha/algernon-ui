import { Suspense } from "react";
import GridBooks from "./components/grid-books/grid-books.component";
import { getBooks } from "./services/get-books.service";
import LoadingContainer from "../components/layout/loading/loading.component";

interface BookByStatusProps {
  searchParams: {
    status:
      | "wantToRead"
      | "alreadyRead"
      | "reading"
      | "abandoned"
      | "rereading";
    page: number;
  };
}

export default async function Home({ searchParams }: BookByStatusProps) {
  const { status, page } = searchParams;

  const books = await getBooks(status, page);

  return (
    <main>
      <Suspense fallback={<LoadingContainer />}>
        <GridBooks
          books={books.data}
          totalPages={books.pagination.totalPages}
        />
      </Suspense>
    </main>
  );
}
