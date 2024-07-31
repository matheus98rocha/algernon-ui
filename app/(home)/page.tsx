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
  };
}

export default async function Home({ searchParams }: BookByStatusProps) {
  const { status } = searchParams;
  const books = await getBooks(status);

  return (
    <main>
      <GridBooks books={books} />
    </main>
  );
}
