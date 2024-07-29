import GridBooks from "./components/grid-books/grid-books.component";
import StatusStack from "./components/status-stack/status-stack.component";
import { getBooks } from "./services/get-books.service";
export default async function Home() {
  const books = await getBooks();
  return (
    <main>
      <StatusStack />
      <GridBooks books={books} />
    </main>
  );
}
