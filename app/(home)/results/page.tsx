import { getBooks } from "../services/get-books.service";
import StatusStack from "../components/status-stack/status-stack.component";
import GridBooks from "../components/grid-books/grid-books.component";

export const dynamicParams = true;

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

export default async function BookByStatus({
  searchParams,
}: BookByStatusProps) {
  const { status } = searchParams;
  const books = await getBooks(status);

  return (
    <>
      <StatusStack currentPage={status ?? ""} />
      <GridBooks books={books} />
    </>
  );
}
