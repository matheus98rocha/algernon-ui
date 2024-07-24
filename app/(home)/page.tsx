import { Suspense } from "react";
import LoadingContainer from "../components/layout/loading/loading.component";
import Books from "./books/components/books/books.component";
import FloatingButton from "./books/components/floating-button/floating-button.component";

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<LoadingContainer />}>
        <Books />
      </Suspense>
      <FloatingButton />
    </main>
  );
}
