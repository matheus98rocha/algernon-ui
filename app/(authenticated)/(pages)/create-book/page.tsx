import React from "react";

import { BackButton } from "../../components";

import { GoogleBookList } from "./google-book-list";

type CreateBookParams = {
  searchParams: {
    bookName: string;
  };
};

async function CreateBook({ searchParams }: CreateBookParams) {
  const { bookName } = searchParams;
  return (
    <div>
      <BackButton />
      <GoogleBookList bookName={bookName} />
    </div>
  );
}

export default CreateBook;
