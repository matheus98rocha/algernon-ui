import CustomPagination from "../components/custom-pagination/custom-pagination.component";
import GridBooks from "./components/grid-books/grid-books.component";
import { getBooks } from "./services/get-books.service";

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
      <GridBooks books={books.data} totalPages={books.pagination.totalPages} />
    </main>
  );
}
