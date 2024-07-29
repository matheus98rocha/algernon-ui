import Grid from "@mui/material/Unstable_Grid2";
import { getBooks } from "../services/get-books.service";
import BookCard from "../components/books-card/book-card.component";
import StatusStack from "../components/status-stack/status-stack.component";
import GridBooks from "../components/grid-books/grid-books.component";

export const dynamicParams = true;

interface BookByStatusProps {
  params: { status: string };
}

export default async function BookByStatus({ params }: BookByStatusProps) {
  const { status } = params;
  const books = await getBooks(status);

  return (
    <>
      <StatusStack />
      <GridBooks books={books} />
    </>
  );
}
