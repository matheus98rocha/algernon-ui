import { Suspense } from "react";
import Books from "./books/components/books/books.component";
import FloatingButton from "./books/components/floating-button/floating-button.component";
import LoadingContainer from "./components/layout/loading/loading.component";


export default async function Home() {
  return (
    <main>
      <Suspense fallback={<LoadingContainer/>}>
        <Books />
      </Suspense>
      <FloatingButton />
    </main>
  );
}
