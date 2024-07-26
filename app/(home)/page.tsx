import Books from "./books/components/books/books.component";
import FloatingButton from "./books/components/floating-button/floating-button.component";

export default async function Home() {
  return (
    <main>
      <Books />
      <FloatingButton />
    </main>
  );
}
