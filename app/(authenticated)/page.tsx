import { Suspense } from "react";

import { LoadingContainer } from "../common/components";
import { BookStatus } from "../common/types/book.type";

import { GridBooks } from "./components/grid-books/grid-books.component";

export type orderByOptions =
  | "alphabetical_a_z"
  | "alphabetical_z_a"
  | "newest"
  | "oldest"
  | "most_rated"
  | "least_rated";

export type SearchParamsType = {
  status: BookStatus;
  page: number;
  bookName: string;
  isFavorite?: boolean;
  orderBy?: orderByOptions;
};

export interface BookByStatusProps {
  searchParams: SearchParamsType;
}

export default async function Home({ searchParams }: BookByStatusProps) {
  return (
    <main>
      <Suspense fallback={<LoadingContainer />}>
        <GridBooks searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
