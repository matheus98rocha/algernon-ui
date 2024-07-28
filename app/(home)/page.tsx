
import Books from "./components/books/books.component";
import StatusStack from "./components/status-stack/status-stack.component";
export default async function Home() {
  return (
    <main>
      <StatusStack />
      <Books />
    </main>
  );
}
