import React from "react";
import { getBookById } from "../services/get-book-by-id.service";
import { notFound } from "next/navigation";

type BookByIdParams = {
  searchParams: {
    id: string;
  };
};

async function BookById({ searchParams }: BookByIdParams) {
  const { id } = searchParams;

  const bookByIdData = await getBookById(id);

  if (bookByIdData.book.length === 0) {
    notFound();
  }

  return (
    <div>
      <ul>
        <li>{bookByIdData["book"]}</li>
        <li>{bookByIdData["author"]}</li>
        <li>{bookByIdData["description"]}</li>
      </ul>
    </div>
  );
}

export default BookById;
