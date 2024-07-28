import Link from "next/link";
import { statusOptions, statusTextMap } from "./constants/books-status";
import Books from "./components/books/books.component";
import FloatingButton from "./components/floating-button/floating-button.component";
import StatusStack from "./components/status-stack/status-stack.component";
export default async function Home() {
  return (
    <main>
      <StatusStack />
      <Books />
      <FloatingButton />
    </main>
  );
}
