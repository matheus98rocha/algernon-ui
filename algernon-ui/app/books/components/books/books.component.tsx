import Grid from "@mui/material/Unstable_Grid2";
import getBooks from "../../services/get-books.service";
import BookCard from "./book-card.component";

export default async function Books() {
  const books = await getBooks();

  return (
    <Grid container spacing={3}>
      {books.map((book) => (
        <Grid key={book.id} sm={6} lg={4} xs={12}>
          <BookCard
            description={book.description}
            book={book.book}
            author={book.author}
            id={book.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
