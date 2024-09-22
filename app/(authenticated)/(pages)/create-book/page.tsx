import React from "react";

import { CreatBookGrid } from "./creat-book-grid";

type CreateBookParams = {
  searchParams: {
    bookName: string;
  };
};

async function CreateBook({ searchParams }: CreateBookParams) {
  const { bookName } = searchParams;
  return <CreatBookGrid bookName={bookName} />;
}

export default CreateBook;
