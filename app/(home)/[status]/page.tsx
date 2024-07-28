import Grid from "@mui/material/Unstable_Grid2";
import { getBooks } from "../services/get-books.service";
import BookCard from "../components/books/book-card.component";
import StatusStack from "../components/status-stack/status-stack.component";

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
      <Grid container spacing={3}>
        {/* Componentizar esse map */}
        {books.map((book: any) => (
          <Grid key={book.id} sm={6} lg={4} xs={12}>
            <BookCard
              description={book.description}
              book={book.book}
              author={book.author}
              id={book.id}
              status={book.status}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
